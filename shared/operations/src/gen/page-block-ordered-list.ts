import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PageBlockOrderedListValues {
  items: Array<any>
}

export class PageBlockOrderedList extends TLConstructor<PageBlockOrderedListValues> {
  static override CONSTRUCTOR_ID: number = -1702174239
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'items',
      type: 'PageListOrderedItem',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get items(): Array<any> {
    return this.getParamValue<Array<any>>('items')
  }
}
