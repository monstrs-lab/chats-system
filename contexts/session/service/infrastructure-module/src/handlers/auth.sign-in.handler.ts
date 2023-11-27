import type { SessionMetadata } from '../rpc/index.js'

import { RpcMetadata }          from '@chats-system/core-rpc'
import { client }               from '@chats-system/auth-rpc-client'
import TL                       from '@chats-system/tl'

import { RpcHandler }           from '../rpc/index.js'

@RpcHandler(TL.auth.SignIn)
export class AuthSignInHandler {
  async execute(
    request: TL.auth.SignIn,
    _: SessionMetadata,
    metadata: RpcMetadata
  ): Promise<TL.auth.Authorization | TL.auth.AuthorizationSignUpRequired> {
    const response = await client.signIn(
      {
        phone: request.phoneNumber,
        phoneCode: request.phoneCode,
        phoneCodeHash: request.phoneCodeHash,
      },
      {
        headers: {
          metadata: Buffer.from(new RpcMetadata(metadata).toBinary()).toString('base64'),
        },
      }
    )

    if (!response.authorization?.user) {
      return new TL.auth.AuthorizationSignUpRequired({})
    }

    return new TL.auth.Authorization({
      user: new TL.User({
        id: response.authorization.user.id,
      }),
    })
  }
}
