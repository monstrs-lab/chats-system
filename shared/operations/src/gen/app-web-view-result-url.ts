import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AppWebViewResultUrlValues {
  url: string
}

export class AppWebViewResultUrl extends TLConstructor<AppWebViewResultUrlValues> {
  static override CONSTRUCTOR_ID: number = 1008422669
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
  ]

  get url(): string {
    return this.getParamValue<string>('url')
  }
}
