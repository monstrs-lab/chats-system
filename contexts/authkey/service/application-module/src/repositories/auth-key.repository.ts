import type { AuthKey } from '@chats-system/authkey-domain-module'

export abstract class AuthKeyRepository {
  abstract save(authKey: AuthKey): Promise<AuthKey>

  abstract findById(authKeyId: bigint): Promise<AuthKey | undefined>
}
