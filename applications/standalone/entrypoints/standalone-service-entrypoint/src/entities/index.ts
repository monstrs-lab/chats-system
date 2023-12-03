import { entities as authEntities }     from '@chats-system/auth-infrastructure-module'
import { entities as authKeyEntities }  from '@chats-system/authkey-infrastructure-module'
import { entities as messagesEntities } from '@chats-system/messages-infrastructure-module'
import { entities as userEntities }     from '@chats-system/user-infrastructure-module'

export const entities = {
  ...authKeyEntities,
  ...userEntities,
  ...authEntities,
  ...messagesEntities,
}
