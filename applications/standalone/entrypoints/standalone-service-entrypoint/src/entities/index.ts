import { entities as authSessionEntities } from '@chats-system/auth-session-infrastructure-module'
import { entities as idGenEntities }       from '@chats-system/idgen-infrastructure-module'

export const entities = {
  ...authSessionEntities,
  ...idGenEntities,
}
