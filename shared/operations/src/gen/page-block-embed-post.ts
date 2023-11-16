import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PageBlockEmbedPostValues {
  url: string
  webpageId: bigint
  authorPhotoId: bigint
  author: string
  date: number
  blocks: Array<any>
  caption: any
}

export class PageBlockEmbedPost extends TLConstructor<PageBlockEmbedPostValues> {
  static override CONSTRUCTOR_ID: number = -229005301
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'url',
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
      name: 'webpage_id',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'author_photo_id',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'author',
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
      name: 'blocks',
      type: 'PageBlock',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'caption',
      type: 'PageCaption',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get url(): string {
    return this.getParamValue<string>('url')
  }

  get webpageId(): bigint {
    return this.getParamValue<bigint>('webpageId')
  }

  get authorPhotoId(): bigint {
    return this.getParamValue<bigint>('authorPhotoId')
  }

  get author(): string {
    return this.getParamValue<string>('author')
  }

  get date(): number {
    return this.getParamValue<number>('date')
  }

  get blocks(): Array<any> {
    return this.getParamValue<Array<any>>('blocks')
  }

  get caption(): any {
    return this.getParamValue<any>('caption')
  }
}
