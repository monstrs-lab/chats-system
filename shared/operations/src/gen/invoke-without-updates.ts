import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface InvokeWithoutUpdatesValues {
  query: any
}

export class InvokeWithoutUpdates extends TLMethod<InvokeWithoutUpdatesValues> {
  static override CONSTRUCTOR_ID = -1080796745
  static override PARAMS: Array<TLExtendedSchemaParam> = [
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

  get query(): any {
    return this.getParamValue<any>('query')
  }
}
