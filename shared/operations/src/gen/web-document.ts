import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface WebDocumentValues {
  url: string
  accessHash: bigint
  size: number
  mimeType: string
  attributes: Array<any>
}

export class WebDocument extends TLConstructor<WebDocumentValues> {
  static override CONSTRUCTOR_ID: number = 475467473
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
      name: 'access_hash',
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

  get accessHash(): bigint {
    return this.getParamValue<bigint>('accessHash')
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
