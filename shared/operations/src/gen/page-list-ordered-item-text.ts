import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PageListOrderedItemTextValues {
  num: string
  text: any
}

export class PageListOrderedItemText extends TLConstructor<PageListOrderedItemTextValues> {
  static override CONSTRUCTOR_ID: number = 1577484359
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'num',
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
      name: 'text',
      type: 'RichText',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get num(): string {
    return this.getParamValue<string>('num')
  }

  get text(): any {
    return this.getParamValue<any>('text')
  }
}
