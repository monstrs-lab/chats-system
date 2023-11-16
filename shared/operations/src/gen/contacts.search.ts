import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ContactsSearchValues {
  q: string
  limit: number
}

export class ContactsSearch extends TLMethod<ContactsSearchValues> {
  static override CONSTRUCTOR_ID = 301470424
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'q',
      type: 'string',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'limit',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get q(): string {
    return this.getParamValue<string>('q')
  }

  get limit(): number {
    return this.getParamValue<number>('limit')
  }
}
