import type { OnGatewayConnection }     from '@nestjs/websockets'
import type { Socket }                  from 'socket.io'

import * as Primitives                  from '@monstrs/mtproto-tl-primitives'
import { Logger }                       from '@monstrs/logger'
import { MTProtoObfuscatedCodec }       from '@monstrs/mtproto-codecs'
import { MTProtoUnencryptedRawMessage } from '@monstrs/mtproto-core'
import { MTProtoEncryptedRawMessage }   from '@monstrs/mtproto-core'
import { MTProtoRawMessage }            from '@monstrs/mtproto-core'
import { MTProtoAuthKey }               from '@monstrs/mtproto-core'
import { MTProtoMessageId }             from '@monstrs/mtproto-core'
import { MTProtoMessageFactory }        from '@monstrs/mtproto-core'
import { WebSocketGateway }             from '@nestjs/websockets'

import * as Transport                   from '@chats-system/transport'
import { Handshake }                    from '@chats-system/handshake'

import { TLRpcHandlersRegistry }        from '../registry/index.js'
import { SessionAuthKeyManager }        from '../session/index.js'

export interface ChatsSystemGatewayState {
  messageFactory: MTProtoMessageFactory
  handshake: Handshake
  codec: MTProtoObfuscatedCodec
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
  #logger = new Logger(ChatsSystemGateway.name)

  constructor(
    private readonly sessionAuthKeyManager: SessionAuthKeyManager,
    private readonly tlRpcHandlersRegistry: TLRpcHandlersRegistry
  ) {}

  handleConnection(socket: ChatsSystemGatewaySocket): void {
    socket.on('message', async (
      data: Buffer,
      ack: (data: Buffer) => Promise<void>
    ): Promise<void> => {
      if (!socket.state) {
        // eslint-disable-next-line no-param-reassign
        socket.state = {
          messageFactory: new MTProtoMessageFactory(),
          handshake: new Handshake(),
          codec: new MTProtoObfuscatedCodec(data),
        }
      } else {
        try {
          await this.handleMessage(data, ack, socket)
        } catch (error) {
          this.#logger.error(error)
        }
      }
    })
  }

  async handleMessage(
    data: Buffer,
    ack: (data: Buffer) => Promise<void>,
    socket: ChatsSystemGatewaySocket
  ): Promise<void> {
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

        await ack(
          await socket.state.codec.send(
            await new MTProtoRawMessage(
              new MTProtoUnencryptedRawMessage(
                new MTProtoAuthKey(),
                MTProtoMessageId.generate(),
                bytes.length,
                bytes
              )
            ).encode()
          )
        )
      }

      if (request instanceof Transport.ReqDHParams) {
        const { serverDHParamsOk } = await socket.state.handshake.handleReqDHParams(request)

        const bytes = serverDHParamsOk.write()

        await ack(
          await socket.state.codec.send(
            await new MTProtoRawMessage(
              new MTProtoUnencryptedRawMessage(
                new MTProtoAuthKey(),
                MTProtoMessageId.generate(),
                bytes.length,
                bytes
              )
            ).encode()
          )
        )
      }

      if (request instanceof Transport.SetClientDHParams) {
        const { dhGenOk, authKey } = await socket.state.handshake.handleSetClientDHParams(request)

        await this.sessionAuthKeyManager.setAuthKey(authKey.authKeyId, authKey)

        const bytes = dhGenOk.write()

        await ack(
          await socket.state.codec.send(
            await new MTProtoRawMessage(
              new MTProtoUnencryptedRawMessage(
                new MTProtoAuthKey(),
                MTProtoMessageId.generate(),
                bytes.length,
                bytes
              )
            ).encode()
          )
        )
      }
    } else {
      const { messageId, sessionId, message } = socket.state.messageFactory.decode(
        rawMessage.getMessage().getMessageData()
      )

      const result = await this.tlRpcHandlersRegistry.execute(
        await Transport.registry.read(new Primitives.BytesIO(message)),
        {
          userId: 0n,
          sessionId,
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
  }
}
