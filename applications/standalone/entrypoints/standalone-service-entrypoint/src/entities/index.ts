import { entities as authSessionEntities } from '@chats-system/auth-session-infrastructure-module'
import { entities as idGenEntities }       from '@chats-system/idgen-infrastructure-module'
import { entities as useEntities } from '@chats-system/user-infrastructure-module'
import { entities as authEntities } from '@chats-system/auth-infrastructure-module'

export const entities = {
  ...authSessionEntities,
  ...authEntities,
  ...idGenEntities,
  ...useEntities,
}
