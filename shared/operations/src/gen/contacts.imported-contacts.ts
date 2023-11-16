import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ContactsImportedContactsValues {
  imported: Array<any>
  popularInvites: Array<any>
  retryContacts: Array<bigint>
  users: Array<any>
}

export class ContactsImportedContacts extends TLConstructor<ContactsImportedContactsValues> {
  static override CONSTRUCTOR_ID: number = 2010127419
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'imported',
      type: 'ImportedContact',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'popular_invites',
      type: 'PopularContact',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'retry_contacts',
      type: 'long',
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'users',
      type: 'User',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get imported(): Array<any> {
    return this.getParamValue<Array<any>>('imported')
  }

  get popularInvites(): Array<any> {
    return this.getParamValue<Array<any>>('popularInvites')
  }

  get retryContacts(): Array<bigint> {
    return this.getParamValue<Array<bigint>>('retryContacts')
  }

  get users(): Array<any> {
    return this.getParamValue<Array<any>>('users')
  }
}
