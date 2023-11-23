import { migrations as authSessionMigrations } from '@chats-system/auth-session-infrastructure-module'
import { migrations as idGenMigrations }       from '@chats-system/idgen-infrastructure-module'

export const migrations = {
  ...authSessionMigrations,
  ...idGenMigrations,
}
