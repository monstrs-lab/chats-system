import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PageValues {
  flags: any
  part: boolean
  rtl: boolean
  v2: boolean
  url: string
  blocks: Array<any>
  photos: Array<any>
  documents: Array<any>
  views: number
}

export class Page extends TLConstructor<PageValues> {
  static override CONSTRUCTOR_ID: number = -1738178803
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
      name: 'part',
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
      name: 'rtl',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'v2',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
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
      name: 'photos',
      type: 'Photo',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'documents',
      type: 'Document',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'views',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get part(): boolean {
    return this.getParamValue<boolean>('part')
  }

  get rtl(): boolean {
    return this.getParamValue<boolean>('rtl')
  }

  get v2(): boolean {
    return this.getParamValue<boolean>('v2')
  }

  get url(): string {
    return this.getParamValue<string>('url')
  }

  get blocks(): Array<any> {
    return this.getParamValue<Array<any>>('blocks')
  }

  get photos(): Array<any> {
    return this.getParamValue<Array<any>>('photos')
  }

  get documents(): Array<any> {
    return this.getParamValue<Array<any>>('documents')
  }

  get views(): number {
    return this.getParamValue<number>('views')
  }
}
