import type { MTProtoAuthKey } from '@monstrs/mtproto-core'

export abstract class AuthKeyPort {
  abstract createAuthKey(authKey: MTProtoAuthKey): Promise<void>

  abstract createAuthKeyUser(authKeyId: bigint, userId: bigint): Promise<void>
}
