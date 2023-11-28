import { MTProtoAuthKey }        from '@monstrs/mtproto-core'
import { MTProtoAuthKeyType }    from '@monstrs/mtproto-core'
import { MTProtoAuthKeyManager } from '@monstrs/mtproto-core'

import { AuthKeyType }           from '@chats-system/authkey-rpc-client'
import { client }                from '@chats-system/authkey-rpc-client'

export class SessionAuthKeyManager extends MTProtoAuthKeyManager {
  override async setAuthKey(authKeyId: bigint, authKey: MTProtoAuthKey): Promise<void> {
    const exists = await super.getAuthKey(authKeyId)

    if (!exists) {
      await client.createAuthKey({
        authKeyId,
        authKey: authKey.key,
        authKeyType: this.toAuthKeyType(authKey.type),
      })

      await super.setAuthKey(authKeyId, authKey)
    }
  }

  override async getAuthKey(authKeyId: bigint): Promise<MTProtoAuthKey | undefined> {
    if (await super.getAuthKey(authKeyId)) {
      return super.getAuthKey(authKeyId)
    }

    const { authKey: savedAuthKey } = await client.getAuthKey({
      authKeyId,
    })

    if (savedAuthKey) {
      const authKey = new MTProtoAuthKey(
        Buffer.from(savedAuthKey.authKey),
        this.toMTProtoAuthKeyType(savedAuthKey.authKeyType)
      )

      await super.setAuthKey(authKeyId, authKey)

      return authKey
    }

    return undefined
  }

  protected toAuthKeyType(keyType: MTProtoAuthKeyType): AuthKeyType {
    if (keyType === MTProtoAuthKeyType.PERM) {
      return AuthKeyType.PERM
    }

    if (keyType === MTProtoAuthKeyType.TEMP) {
      return AuthKeyType.TEMP
    }

    if (keyType === MTProtoAuthKeyType.MEDIA_TEMP) {
      return AuthKeyType.MEDIA_TEMP
    }

    return AuthKeyType.UNKNOWN
  }

  protected toMTProtoAuthKeyType(keyType: AuthKeyType): MTProtoAuthKeyType {
    if (keyType === AuthKeyType.PERM) {
      return MTProtoAuthKeyType.PERM
    }

    if (keyType === AuthKeyType.TEMP) {
      return MTProtoAuthKeyType.TEMP
    }

    if (keyType === AuthKeyType.MEDIA_TEMP) {
      return MTProtoAuthKeyType.MEDIA_TEMP
    }

    return MTProtoAuthKeyType.UNKNOWN
  }
}
