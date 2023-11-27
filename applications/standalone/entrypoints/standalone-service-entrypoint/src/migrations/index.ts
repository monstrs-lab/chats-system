import { migrations as authMigrations }    from '@chats-system/auth-infrastructure-module'
import { migrations as authKeyMigrations } from '@chats-system/authkey-infrastructure-module'
import { migrations as idGenMigrations }   from '@chats-system/idgen-infrastructure-module'
import { migrations as userMigrations }    from '@chats-system/user-infrastructure-module'

export const migrations = {
  ...authKeyMigrations,
  ...idGenMigrations,
  ...userMigrations,
  ...authMigrations,
}
