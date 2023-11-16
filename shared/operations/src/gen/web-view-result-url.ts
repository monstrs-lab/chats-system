import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface WebViewResultUrlValues {
  queryId: bigint
  url: string
}

export class WebViewResultUrl extends TLConstructor<WebViewResultUrlValues> {
  static override CONSTRUCTOR_ID: number = 202659196
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'query_id',
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
  ]

  get queryId(): bigint {
    return this.getParamValue<bigint>('queryId')
  }

  get url(): string {
    return this.getParamValue<string>('url')
  }
}
