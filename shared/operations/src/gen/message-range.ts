import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageRangeValues {
  minId: number
  maxId: number
}

export class MessageRange extends TLConstructor<MessageRangeValues> {
  static override CONSTRUCTOR_ID: number = 182649427
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'min_id',
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
      name: 'max_id',
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

  get minId(): number {
    return this.getParamValue<number>('minId')
  }

  get maxId(): number {
    return this.getParamValue<number>('maxId')
  }
}
