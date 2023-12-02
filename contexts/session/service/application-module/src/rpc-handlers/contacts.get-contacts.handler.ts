import type { TLRpcSession } from '@chats-system/tl-rpc'

import { RpcMetadata }       from '@chats-system/core-rpc'
import { TLRpcHandler }      from '@chats-system/tl-rpc'
import { client }            from '@chats-system/user-rpc-client'
import TL                    from '@chats-system/tl'

@TLRpcHandler(TL.contacts.GetContacts)
export class ContactsGetContactsHandler {
  async execute(
    _: TL.contacts.GetContacts,
    __: TLRpcSession,
    metadata: RpcMetadata
  ): Promise<TL.contacts.Contacts> {
    const { userContacts } = await client.getUserContacts(
      {
        userId: metadata.userId,
      },
      {
        headers: {
          metadata: Buffer.from(new RpcMetadata(metadata).toBinary()).toString('base64'),
        },
      }
    )

    const { user: me } = await client.getUser({
      userId: metadata.userId,
    })

    const users = await Promise.all(
      userContacts.map(async (userContact) => {
        const { user } = await client.getUser({ userId: userContact.contactUserId })

        return user!
      })
    )

    return new TL.contacts.Contacts({
      contacts: userContacts.map(
        (userContact) =>
          new TL.Contact({
            userId: userContact.contactUserId,
            mutual: userContact.mutual,
          })
      ),
      users: users.concat([me!]).map((user) => new TL.User(user)),
      savedCount: 0,
    })
  }
}
