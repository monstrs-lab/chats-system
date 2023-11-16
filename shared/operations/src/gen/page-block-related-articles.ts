import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PageBlockRelatedArticlesValues {
  title: any
  articles: Array<any>
}

export class PageBlockRelatedArticles extends TLConstructor<PageBlockRelatedArticlesValues> {
  static override CONSTRUCTOR_ID: number = 370236054
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'title',
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
      name: 'articles',
      type: 'PageRelatedArticle',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get title(): any {
    return this.getParamValue<any>('title')
  }

  get articles(): Array<any> {
    return this.getParamValue<Array<any>>('articles')
  }
}
