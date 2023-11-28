import type { AuthKeyType }    from '@chats-system/authkey-rpc-client'
import type { MTProtoAuthKey } from '@monstrs/mtproto-core'

import { Injectable }          from '@nestjs/common'

import { AuthKeyPort }         from '@chats-system/auth-domain-module'
import { client }              from '@chats-system/authkey-rpc-client'

@Injectable()
export class AuthKeyPortImpl extends AuthKeyPort {
  override async createAuthKey(authKey: MTProtoAuthKey): Promise<void> {
    await client.createAuthKey({
      authKeyId: authKey.authKeyId,
      authKey: authKey.key,
      authKeyType: authKey.type as any as AuthKeyType,
    })
  }

  override async createAuthKeyUser(authKeyId: bigint, userId: bigint): Promise<void> {
    await client.createAuthKeyUser({
      authKeyId,
      userId,
    })
  }
}
