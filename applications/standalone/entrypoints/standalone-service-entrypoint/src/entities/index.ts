import { entities as authKeyEntities } from '@chats-system/authkey-infrastructure-module'
import { entities as idGenEntities }   from '@chats-system/idgen-infrastructure-module'

export const entities = {
  ...authKeyEntities,
  ...idGenEntities,
}
