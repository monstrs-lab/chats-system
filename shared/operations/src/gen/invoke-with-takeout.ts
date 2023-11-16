import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface InvokeWithTakeoutValues {
  takeoutId: bigint
  query: any
}

export class InvokeWithTakeout extends TLMethod<InvokeWithTakeoutValues> {
  static override CONSTRUCTOR_ID = -1398145746
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'takeout_id',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
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

  get takeoutId(): bigint {
    return this.getParamValue<bigint>('takeoutId')
  }

  get query(): any {
    return this.getParamValue<any>('query')
  }
}
