import type { AuthKey } from '../entities/index.js'

export abstract class AuthKeyRepository {
  abstract save(authKey: AuthKey): Promise<AuthKey>

  abstract getById(authKeyId: bigint): Promise<AuthKey | undefined>
}
