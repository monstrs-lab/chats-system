import { Injectable }            from '@nestjs/common'

import { UserRepository }        from '@chats-system/user-domain-module'
import { UserContactRepository } from '@chats-system/user-domain-module'
import { UserContactFactory }    from '@chats-system/user-domain-module'

type InputContact = {
  clientId: bigint
  phone: string
  firstName: string
  lastName: string
}

@Injectable()
export class ImportUserContactsUseCase {
  constructor(
    private readonly userRepository: UserRepository,

    private readonly userContactRepository: UserContactRepository,
    private readonly userContactFactory: UserContactFactory
  ) {}

  async execute(userId: bigint, contacts: Array<InputContact>): Promise<any> {
    const imported: Array<{ userId: bigint; clientId: bigint }> = []
    const updateIdList: Array<bigint> = []

    const users = await this.userRepository.getByPhoneList(contacts.map((contact) => contact.phone))

    for await (const user of users) {
      const contact = contacts.find((c) => c.phone === user.phone)

      if (contact) {
        let importedContact = await this.userContactRepository.getMyContactById(userId, user.id)

        if (!importedContact) {
          importedContact = this.userContactFactory.createUserContact({
            ownerUserId: userId,
            contactUserId: user.id,
            contactPhone: contact.phone,
            contactFirstName: contact.firstName,
            contactLastName: contact.lastName,
            mutual: true,
          })

          await this.userContactRepository.save(importedContact)
        }

        imported.push({
          userId: importedContact.contactUserId,
          clientId: contact.clientId,
        })
      }
    }

    return {
      imported,
      updateIdList,
      popularInvites: [],
      retryContacts: [],
      users: users.filter((user) => imported.find((contact) => contact.userId === user.id)),
    }
  }
}
