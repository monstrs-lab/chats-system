import type { User }                    from '@chats-system/users-client-module'
import type { OnGatewayConnection }     from '@nestjs/websockets'
import type { Socket }                  from 'socket.io'

import * as Primitives                  from '@monstrs/mtproto-tl-primitives'
import { MTProtoObfuscatedCodec }       from '@monstrs/mtproto-codecs'
import { MTProtoUnencryptedRawMessage } from '@monstrs/mtproto-core'
import { MTProtoEncryptedRawMessage }   from '@monstrs/mtproto-core'
import { MTProtoRawMessage }            from '@monstrs/mtproto-core'
import { MTProtoAuthKey }               from '@monstrs/mtproto-core'
import { MTProtoMessageId }             from '@monstrs/mtproto-core'
import { MTProtoMessageFactory }        from '@monstrs/mtproto-core'
import { WebSocketGateway }             from '@nestjs/websockets'
import { SubscribeMessage }             from '@nestjs/websockets'

import * as Transport                   from '@chats-system/transport'
import { Handshake }                    from '@chats-system/handshake'
import { UsersClient }                  from '@chats-system/users-client-module'

import { TLRpcHandlersRegistry }        from '../registry/index.js'
import { SessionAuthKeyManager }        from '../session/index.js'

export interface ChatsSystemGatewayState {
  messageFactory: MTProtoMessageFactory
  codec: MTProtoObfuscatedCodec
  handshake: Handshake
  user: User
}

export interface ChatsSystemGatewaySocket extends Socket {
  state: ChatsSystemGatewayState
}

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatsSystemGateway implements OnGatewayConnection {
  constructor(
    private readonly sessionAuthKeyManager: SessionAuthKeyManager,
    private readonly tlRpcHandlersRegistry: TLRpcHandlersRegistry,
    private readonly usersClient: UsersClient
  ) {}

  @SubscribeMessage('handshake')
  async handleHandshake(socket: ChatsSystemGatewaySocket, data: Buffer): Promise<Buffer> {
    const messageData = await socket.state.codec.receive(data)

    const rawMessage = await MTProtoRawMessage.decode(messageData, {
      authKeyManager: this.sessionAuthKeyManager,
    })

    if (rawMessage.getMessage() instanceof MTProtoUnencryptedRawMessage) {
      const request = await Transport.registry.read<
        Transport.ReqDHParams | Transport.ReqPqMulti | Transport.SetClientDHParams
      >(new Primitives.BytesIO(rawMessage.getMessage().getMessageData()))

      if (request instanceof Transport.ReqPqMulti) {
        const { resPQ } = await socket.state.handshake.handleReqPQMulti(request)

        const bytes = resPQ.write()

        return socket.state.codec.send(
          await new MTProtoRawMessage(
            new MTProtoUnencryptedRawMessage(
              new MTProtoAuthKey(),
              MTProtoMessageId.generate(),
              bytes.length,
              bytes
            )
          ).encode()
        )
      }

      if (request instanceof Transport.ReqDHParams) {
        const { serverDHParamsOk } = await socket.state.handshake.handleReqDHParams(request)

        const bytes = serverDHParamsOk.write()

        return socket.state.codec.send(
          await new MTProtoRawMessage(
            new MTProtoUnencryptedRawMessage(
              new MTProtoAuthKey(),
              MTProtoMessageId.generate(),
              bytes.length,
              bytes
            )
          ).encode()
        )
      }

      if (request instanceof Transport.SetClientDHParams) {
        const { dhGenOk, authKey } = await socket.state.handshake.handleSetClientDHParams(request)

        await this.sessionAuthKeyManager.setAuthKey(authKey.authKeyId, authKey)

        const bytes = dhGenOk.write()

        return socket.state.codec.send(
          await new MTProtoRawMessage(
            new MTProtoUnencryptedRawMessage(
              new MTProtoAuthKey(),
              MTProtoMessageId.generate(),
              bytes.length,
              bytes
            )
          ).encode()
        )
      }
    }

    throw new Error('Invalid message type')
  }

  @SubscribeMessage('message')
  async handleMessage(socket: ChatsSystemGatewaySocket, data: Buffer): Promise<void> {
    const messageData = await socket.state.codec.receive(data)

    const rawMessage = await MTProtoRawMessage.decode(messageData, {
      authKeyManager: this.sessionAuthKeyManager,
    })

    const { messageId, sessionId, message } = socket.state.messageFactory.decode(
      rawMessage.getMessage().getMessageData()
    )

    const result = await this.tlRpcHandlersRegistry.execute(
      await Transport.registry.read(new Primitives.BytesIO(message)),
      {
        sessionId,
        userId: socket.state.user.id,
        clientMessageId: messageId,
        authKeyId: rawMessage.getMessage().getAuthKey().authKeyId,
        permAuthKeyId: rawMessage.getMessage().getAuthKey().authKeyId,
        receiveTime: Math.floor(Date.now() / 1000),
      }
    )

    await socket.emit(
      'message',
      await socket.state.codec.send(
        await new MTProtoRawMessage(
          new MTProtoEncryptedRawMessage(
            rawMessage.getMessage().getAuthKey(),
            socket.state.messageFactory.encode(0n, sessionId, result.write())
          )
        ).encode()
      )
    )
  }

  async handleConnection(socket: ChatsSystemGatewaySocket): Promise<void> {
    const externalId = socket.handshake.headers['x-user'] as string
    const codecHeader = socket.handshake.query.header as string

    if (!codecHeader) {
      throw new Error('Codec header required')
    }

    if (!externalId) {
      throw new Error('User required')
    }

    const user = await this.usersClient.loadUserByExternalId(externalId)

    if (!user) {
      throw new Error('Uknown user')
    }

    // eslint-disable-next-line no-param-reassign
    socket.state = {
      messageFactory: new MTProtoMessageFactory(),
      handshake: new Handshake(),
      codec: new MTProtoObfuscatedCodec(Buffer.from(codecHeader, 'base64')),
      user,
    }
  }
}
