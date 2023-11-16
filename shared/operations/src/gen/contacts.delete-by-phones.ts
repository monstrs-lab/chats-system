import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ContactsDeleteByPhonesValues {
  phones: Array<string>
}

export class ContactsDeleteByPhones extends TLMethod<ContactsDeleteByPhonesValues> {
  static override CONSTRUCTOR_ID = 269745566
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'phones',
      type: 'string',
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get phones(): Array<string> {
    return this.getParamValue<Array<string>>('phones')
  }
}
