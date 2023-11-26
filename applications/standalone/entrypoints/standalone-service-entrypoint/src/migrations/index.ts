import { migrations as authSessionMigrations } from '@chats-system/auth-session-infrastructure-module'
import { migrations as idGenMigrations }       from '@chats-system/idgen-infrastructure-module'
import { migrations as authMigrations } from '@chats-system/auth-infrastructure-module'
import { migrations as userMigrations } from '@chats-system/user-infrastructure-module'

export const migrations = {
  ...authSessionMigrations,
  ...idGenMigrations,
  ...authMigrations,
  ...userMigrations,
}
