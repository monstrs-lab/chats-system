import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesSearchSentMediaValues {
  q: string
  filter: any
  limit: number
}

export class MessagesSearchSentMedia extends TLMethod<MessagesSearchSentMediaValues> {
  static override CONSTRUCTOR_ID = 276705696
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
      name: 'filter',
      type: 'MessagesFilter',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
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

  get filter(): any {
    return this.getParamValue<any>('filter')
  }

  get limit(): number {
    return this.getParamValue<number>('limit')
  }
}
