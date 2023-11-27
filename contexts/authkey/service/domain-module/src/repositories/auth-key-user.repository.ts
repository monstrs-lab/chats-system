import type { AuthKeyUser } from '../entities/index.js'

export abstract class AuthKeyUserRepository {
  abstract save(userAuth: AuthKeyUser): Promise<AuthKeyUser>

  abstract getById(authKeyId: bigint): Promise<AuthKeyUser | undefined>

  abstract getActiveById(authKeyId: bigint): Promise<AuthKeyUser | undefined>
}
