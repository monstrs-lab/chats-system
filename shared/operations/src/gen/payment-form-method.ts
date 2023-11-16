import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PaymentFormMethodValues {
  url: string
  title: string
}

export class PaymentFormMethod extends TLConstructor<PaymentFormMethodValues> {
  static override CONSTRUCTOR_ID: number = -1996951013
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
      name: 'title',
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

  get title(): string {
    return this.getParamValue<string>('title')
  }
}
