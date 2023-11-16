import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ContactsBlockValues {
  id: any
}

export class ContactsBlock extends TLMethod<ContactsBlockValues> {
  static override CONSTRUCTOR_ID = 1758204945
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'id',
      type: 'InputPeer',
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
