import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface InvokeWithMessagesRangeValues {
  range: any
  query: any
}

export class InvokeWithMessagesRange extends TLMethod<InvokeWithMessagesRangeValues> {
  static override CONSTRUCTOR_ID = 911373810
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'range',
      type: 'MessageRange',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'query',
      type: 'X',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get range(): any {
    return this.getParamValue<any>('range')
  }

  get query(): any {
    return this.getParamValue<any>('query')
  }
}
