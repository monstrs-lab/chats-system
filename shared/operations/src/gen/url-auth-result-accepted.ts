import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UrlAuthResultAcceptedValues {
  url: string
}

export class UrlAuthResultAccepted extends TLConstructor<UrlAuthResultAcceptedValues> {
  static override CONSTRUCTOR_ID: number = -1886646706
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
