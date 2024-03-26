import { entities as authKeyEntities }  from '@chats-system/authkey-infrastructure-module'
import { entities as messagesEntities } from '@chats-system/messages-infrastructure-module'
import { entities as usersEntities }    from '@chats-system/users-infrastructure-module'

export const entities = {
  ...authKeyEntities,
  ...usersEntities,
  ...messagesEntities,
}
