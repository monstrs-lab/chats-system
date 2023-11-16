import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PageBlockEmbedValues {
  flags: any
  fullWidth: boolean
  allowScrolling: boolean
  url: string
  html: string
  posterPhotoId: bigint
  w: number
  h: number
  caption: any
}

export class PageBlockEmbed extends TLConstructor<PageBlockEmbedValues> {
  static override CONSTRUCTOR_ID: number = -1468953147
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'flags',
      type: '#',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: true,
      useVectorId: false,
    },
    {
      name: 'full_width',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'allow_scrolling',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'url',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'html',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'poster_photo_id',
      type: 'long',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'w',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 5,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'h',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 5,
      flagIndicator: false,
      useVectorId: false,
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

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get fullWidth(): boolean {
    return this.getParamValue<boolean>('fullWidth')
  }

  get allowScrolling(): boolean {
    return this.getParamValue<boolean>('allowScrolling')
  }

  get url(): string {
    return this.getParamValue<string>('url')
  }

  get html(): string {
    return this.getParamValue<string>('html')
  }

  get posterPhotoId(): bigint {
    return this.getParamValue<bigint>('posterPhotoId')
  }

  get w(): number {
    return this.getParamValue<number>('w')
  }

  get h(): number {
    return this.getParamValue<number>('h')
  }

  get caption(): any {
    return this.getParamValue<any>('caption')
  }
}
