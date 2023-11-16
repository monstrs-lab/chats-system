import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ContactsAcceptContactValues {
  id: any
}

export class ContactsAcceptContact extends TLMethod<ContactsAcceptContactValues> {
  static override CONSTRUCTOR_ID = -130964977
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'id',
      type: 'InputUser',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get id(): any {
    return this.getParamValue<any>('id')
  }
}
