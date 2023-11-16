import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface SearchResultsCalendarPeriodValues {
  date: number
  minMsgId: number
  maxMsgId: number
  count: number
}

export class SearchResultsCalendarPeriod extends TLConstructor<SearchResultsCalendarPeriodValues> {
  static override CONSTRUCTOR_ID: number = -911191137
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'date',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'min_msg_id',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'max_msg_id',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'count',
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

  get date(): number {
    return this.getParamValue<number>('date')
  }

  get minMsgId(): number {
    return this.getParamValue<number>('minMsgId')
  }

  get maxMsgId(): number {
    return this.getParamValue<number>('maxMsgId')
  }

  get count(): number {
    return this.getParamValue<number>('count')
  }
}
