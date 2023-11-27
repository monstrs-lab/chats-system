import type { AuthKeyConnection } from '../entities/index.js'

export abstract class AuthKeyConnectionRepository {
  abstract save(auth: AuthKeyConnection): Promise<AuthKeyConnection>

  abstract getById(authId: bigint): Promise<AuthKeyConnection | undefined>
}
