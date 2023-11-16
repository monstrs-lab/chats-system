import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PageBlockAuthorDateValues {
  author: any
  publishedDate: number
}

export class PageBlockAuthorDate extends TLConstructor<PageBlockAuthorDateValues> {
  static override CONSTRUCTOR_ID: number = -1162877472
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'author',
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
      name: 'published_date',
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

  get author(): any {
    return this.getParamValue<any>('author')
  }

  get publishedDate(): number {
    return this.getParamValue<number>('publishedDate')
  }
}
