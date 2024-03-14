import type { AuthKeyUser } from '@chats-system/authkey-domain-module'

export abstract class AuthKeyUserRepository {
  abstract save(authKeyUser: AuthKeyUser): Promise<AuthKeyUser>

  abstract findByAuthKeyId(authKeyId: bigint): Promise<AuthKeyUser | undefined>
}
