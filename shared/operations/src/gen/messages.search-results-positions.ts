import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessagesSearchResultsPositionsValues {
  count: number
  positions: Array<any>
}

export class MessagesSearchResultsPositions extends TLConstructor<MessagesSearchResultsPositionsValues> {
  static override CONSTRUCTOR_ID: number = 1404185519
  static override PARAMS: Array<TLExtendedSchemaParam> = [
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
    {
      name: 'positions',
      type: 'SearchResultsPosition',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get count(): number {
    return this.getParamValue<number>('count')
  }

  get positions(): Array<any> {
    return this.getParamValue<Array<any>>('positions')
  }
}
