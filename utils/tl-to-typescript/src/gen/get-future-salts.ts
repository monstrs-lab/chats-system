import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

export class GetFutureSalts extends TLMethod {
  static override CONSTRUCTOR_ID = -1188971260
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'num',
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

  constructor(public readonly num: number) {
    super()
  }
}
