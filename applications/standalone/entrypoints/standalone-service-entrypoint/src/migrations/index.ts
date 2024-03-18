import { migrations as authKeyMigrations } from '@chats-system/authkey-infrastructure-module'
import { migrations as usersMigrations }   from '@chats-system/users-infrastructure-module'

export const migrations = {
  ...authKeyMigrations,
  ...usersMigrations,
}
