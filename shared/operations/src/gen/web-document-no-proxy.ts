import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface WebDocumentNoProxyValues {
  url: string
  size: number
  mimeType: string
  attributes: Array<any>
}

export class WebDocumentNoProxy extends TLConstructor<WebDocumentNoProxyValues> {
  static override CONSTRUCTOR_ID: number = -104284986
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
      name: 'size',
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
      name: 'mime_type',
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
      name: 'attributes',
      type: 'DocumentAttribute',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get url(): string {
    return this.getParamValue<string>('url')
  }

  get size(): number {
    return this.getParamValue<number>('size')
  }

  get mimeType(): string {
    return this.getParamValue<string>('mimeType')
  }

  get attributes(): Array<any> {
    return this.getParamValue<Array<any>>('attributes')
  }
}
