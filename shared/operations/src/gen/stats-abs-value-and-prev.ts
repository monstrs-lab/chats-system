import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface StatsAbsValueAndPrevValues {
  current: number
  previous: number
}

export class StatsAbsValueAndPrev extends TLConstructor<StatsAbsValueAndPrevValues> {
  static override CONSTRUCTOR_ID: number = -884757282
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'current',
      type: 'double',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'previous',
      type: 'double',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get current(): number {
    return this.getParamValue<number>('current')
  }

  get previous(): number {
    return this.getParamValue<number>('previous')
  }
}
