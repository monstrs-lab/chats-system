import type { SessionMetadata } from '../rpc/index.js'

import { RpcMetadata }          from '@chats-system/core-rpc'
import { client }               from '@chats-system/user-rpc-client'
import TL                       from '@chats-system/tl'

import { RpcHandler }           from '../rpc/index.js'

@RpcHandler(TL.contacts.ImportContacts)
export class ContactsImportContactsHandler {
  async execute(
    request: TL.contacts.ImportContacts,
    _: SessionMetadata,
    metadata: RpcMetadata
  ): Promise<TL.contacts.ImportedContacts> {
    const { importedContacts } = await client.importContacts(
      {
        contacts: request.contacts,
      },
      {
        headers: {
          metadata: Buffer.from(new RpcMetadata(metadata).toBinary()).toString('base64'),
        },
      }
    )

    const imported = (importedContacts?.imported || []).map(
      (importedContact) => new TL.ImportedContact(importedContact)
    )
    const users = (importedContacts?.users || []).map((user) => new TL.User(user))

    return new TL.contacts.ImportedContacts({
      imported,
      users,
      popularInvites: [],
      retryContacts: [],
    })
  }
}
