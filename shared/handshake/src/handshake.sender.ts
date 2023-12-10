import { MTProtoRawMessage }            from '@monstrs/mtproto-core'
import { MTProtoUnencryptedRawMessage } from '@monstrs/mtproto-core'
import { MTProtoMessageId }             from '@monstrs/mtproto-core'
import { MTProtoAuthKey }               from '@monstrs/mtproto-core'

import { TLObject }                     from '@chats-system/tl'
import { BytesIO }                      from '@chats-system/tl'
import TL                               from '@chats-system/tl'

import { Handshake }                    from './handshake.js'

export interface HandshakeSenderConnection {
  send: (buffer: Buffer) => Promise<void>
  recv: () => Promise<Buffer>
}

export class HandshakeSender {
  private connection: HandshakeSenderConnection

  private handshake: Handshake

  constructor(connection: HandshakeSenderConnection) {
    this.connection = connection
    this.handshake = new Handshake()
  }

  async send(): Promise<MTProtoAuthKey> {
    const { reqPQMulti } = await this.handshake.sendReqPQMulti()

    await this.connection.send(
      await new MTProtoRawMessage(
        new MTProtoUnencryptedRawMessage(
          new MTProtoAuthKey(),
          MTProtoMessageId.generate(),
          reqPQMulti.write().length,
          reqPQMulti.write()
        )
      ).encode()
    )

    const resPQRawMessage = await MTProtoRawMessage.decode(await this.connection.recv(), {
      authKeyManager: {} as any,
    })

    const resPQ = await TLObject.read(new BytesIO(resPQRawMessage.getMessage().getMessageData()))

    if (!(resPQ instanceof TL.ResPQ)) {
      throw new Error('Invalid response')
    }

    const { reqDhParams } = await this.handshake.handleResPQ(resPQ)

    await this.connection.send(
      await new MTProtoRawMessage(
        new MTProtoUnencryptedRawMessage(
          new MTProtoAuthKey(),
          MTProtoMessageId.generate(),
          reqDhParams.write().length,
          reqDhParams.write()
        )
      ).encode()
    )

    const serverDHParamsOkRawMessage = await MTProtoRawMessage.decode(
      await this.connection.recv(),
      {
        authKeyManager: {} as any,
      }
    )

    const serverDHParamsOk = await TLObject.read(
      new BytesIO(serverDHParamsOkRawMessage.getMessage().getMessageData())
    )

    if (!(serverDHParamsOk instanceof TL.ServerDhParamsOk)) {
      throw new Error('Invalid response')
    }

    const { setClientDhParams, authKey } =
      await this.handshake.handleServerDhParams(serverDHParamsOk)

    await this.connection.send(
      await new MTProtoRawMessage(
        new MTProtoUnencryptedRawMessage(
          new MTProtoAuthKey(),
          MTProtoMessageId.generate(),
          setClientDhParams.write().length,
          setClientDhParams.write()
        )
      ).encode()
    )

    return authKey
  }
}
