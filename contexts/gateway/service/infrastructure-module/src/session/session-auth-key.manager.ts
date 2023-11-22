import { MTProtoAuthKey }        from '@monstrs/mtproto-core'
import { MTProtoAuthKeyManager } from '@monstrs/mtproto-core'

import { client }                from '@chats-system/session-rpc-client'

export class SessionAuthKeyManager extends MTProtoAuthKeyManager {
  override async setAuthKey(authKeyId: bigint, authKey: MTProtoAuthKey): Promise<void> {
    const exists = await super.getAuthKey(authKeyId)

    if (!exists) {
      await client.setAuthKey({
        authKey: {
          authKeyId,
          authKey: authKey.key,
          authKeyType: 0,
          permAuthKeyId: authKeyId, // TODO change by type
          tempAuthKeyId: BigInt(0),
          mediaTempAuthKeyId: BigInt(0),
        },
      })

      await super.setAuthKey(authKeyId, authKey)
    }
  }

  override async getAuthKey(authKeyId: bigint): Promise<MTProtoAuthKey | undefined> {
    if (await super.getAuthKey(authKeyId)) {
      return super.getAuthKey(authKeyId)
    }

    const response = await client.queryAuthKey({
      authKeyId,
    })

    if (response?.authKey) {
      return new MTProtoAuthKey(Buffer.from(response.authKey.authKey))
    }

    return undefined
  }
}
