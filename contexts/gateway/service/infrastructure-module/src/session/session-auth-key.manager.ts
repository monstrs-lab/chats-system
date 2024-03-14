import { MTProtoAuthKey }        from '@monstrs/mtproto-core'
import { MTProtoAuthKeyType }    from '@monstrs/mtproto-core'
import { MTProtoAuthKeyManager } from '@monstrs/mtproto-core'
import { Injectable }            from '@nestjs/common'

import { AuthKeyClient }         from '@chats-system/authkey-client-module'

@Injectable()
export class SessionAuthKeyManager extends MTProtoAuthKeyManager {
  constructor(private readonly authKeyClient: AuthKeyClient) {
    super()
  }

  override async setAuthKey(authKeyId: bigint, authKey: MTProtoAuthKey): Promise<void> {
    const exists = await super.getAuthKey(authKeyId)

    if (!exists) {
      await this.authKeyClient.createAuthKey({
        id: authKeyId,
        key: authKey.key,
      })

      await super.setAuthKey(authKeyId, authKey)
    }
  }

  override async getAuthKey(authKeyId: bigint): Promise<MTProtoAuthKey | undefined> {
    if (await super.getAuthKey(authKeyId)) {
      return super.getAuthKey(authKeyId)
    }

    const { authKey: savedAuthKey } = await this.authKeyClient.getAuthKey({
      authKeyId,
    })

    if (savedAuthKey) {
      const authKey = new MTProtoAuthKey(Buffer.from(savedAuthKey.key), MTProtoAuthKeyType.PERM)

      await super.setAuthKey(authKeyId, authKey)

      return authKey
    }

    return undefined
  }
}
