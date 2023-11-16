import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ContactsUnblockValues {
  id: any
}

export class ContactsUnblock extends TLMethod<ContactsUnblockValues> {
  static override CONSTRUCTOR_ID = -1096393392
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
