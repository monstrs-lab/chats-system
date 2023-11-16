import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface KeyboardButtonSimpleWebViewValues {
  text: string
  url: string
}

export class KeyboardButtonSimpleWebView extends TLConstructor<KeyboardButtonSimpleWebViewValues> {
  static override CONSTRUCTOR_ID: number = -1598009252
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'text',
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

  get text(): string {
    return this.getParamValue<string>('text')
  }

  get url(): string {
    return this.getParamValue<string>('url')
  }
}
