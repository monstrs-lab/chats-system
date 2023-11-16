import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PageCaptionValues {
  text: any
  credit: any
}

export class PageCaption extends TLConstructor<PageCaptionValues> {
  static override CONSTRUCTOR_ID: number = 1869903447
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
    {
      name: 'credit',
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

  get credit(): any {
    return this.getParamValue<any>('credit')
  }
}
