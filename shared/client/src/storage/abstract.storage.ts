import type { MTProtoAuthKey } from '@monstrs/mtproto-core'

export abstract class AbstractStorage {
  abstract load(): Promise<void>

  abstract setAuthKey(authKey: MTProtoAuthKey): Promise<void>

  abstract getAuthKey(): Promise<MTProtoAuthKey | undefined>
}
