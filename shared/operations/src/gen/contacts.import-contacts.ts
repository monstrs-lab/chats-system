import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ContactsImportContactsValues {
  contacts: Array<any>
}

export class ContactsImportContacts extends TLMethod<ContactsImportContactsValues> {
  static override CONSTRUCTOR_ID = 746589157
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'contacts',
      type: 'InputContact',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get contacts(): Array<any> {
    return this.getParamValue<Array<any>>('contacts')
  }
}
