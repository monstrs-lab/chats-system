import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PageBlockHeaderValues {
  text: any
}

export class PageBlockHeader extends TLConstructor<PageBlockHeaderValues> {
  static override CONSTRUCTOR_ID: number = -1076861716
  static override PARAMS: Array<TLExtendedSchemaParam> = [
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

  get text(): any {
    return this.getParamValue<any>('text')
  }
}