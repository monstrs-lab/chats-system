import type { TLRpcSession } from '@chats-system/tl-rpc'

import { RpcMetadata }       from '@chats-system/core-rpc'
import { TLRpcHandler }      from '@chats-system/tl-rpc'
import { UserClient }        from '@chats-system/user-client-module'
import { client }            from '@chats-system/auth-rpc-client'
import TL                    from '@chats-system/tl'

@TLRpcHandler(TL.auth.SignIn)
export class AuthSignInHandler {
  constructor(private readonly userClient: UserClient) {}

  async execute(
    request: TL.auth.SignIn,
    _: TLRpcSession,
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

    if (!response.authorization?.userId) {
      return new TL.auth.AuthorizationSignUpRequired({})
    }

    const user = await this.userClient.loadUser(response.authorization.userId)

    return new TL.auth.Authorization({
      user: new TL.User(user),
    })
  }
}
