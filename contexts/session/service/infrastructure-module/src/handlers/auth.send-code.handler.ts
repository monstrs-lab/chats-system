import type { SessionMetadata } from '../rpc/index.js'

import { RpcMetadata }          from '@chats-system/core-rpc'
import { client }               from '@chats-system/auth-rpc-client'
import TL                       from '@chats-system/tl'

import { RpcHandler }           from '../rpc/index.js'

@RpcHandler(TL.auth.SendCode)
export class AuthSendCodeHandler {
  async execute(
    request: TL.auth.SendCode,
    _: SessionMetadata,
    metadata: RpcMetadata
  ): Promise<TL.auth.SentCode> {
    const response = await client.sendCode(
      {
        phone: request.phoneNumber,
      },
      {
        headers: {
          metadata: Buffer.from(new RpcMetadata(metadata).toBinary()).toString('base64'),
        },
      }
    )

    return new TL.auth.SentCode({
      type: new TL.auth.SentCodeTypeSms({ length: 5 }),
      phoneCodeHash: response.sentCode!.phoneCodeHash,
      timeout: response.sentCode!.timeout,
    })
  }
}
