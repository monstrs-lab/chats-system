import { migrations as authKeyMigrations } from '@chats-system/authkey-infrastructure-module'
import { migrations as idGenMigrations }   from '@chats-system/idgen-infrastructure-module'

export const migrations = {
  ...authKeyMigrations,
  ...idGenMigrations,
}
