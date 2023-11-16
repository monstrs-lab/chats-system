import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PaymentsBankCardDataValues {
  title: string
  openUrls: Array<any>
}

export class PaymentsBankCardData extends TLConstructor<PaymentsBankCardDataValues> {
  static override CONSTRUCTOR_ID: number = 1042605427
  static override PARAMS: Array<TLExtendedSchemaParam> = [
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
    {
      name: 'open_urls',
      type: 'BankCardOpenUrl',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get title(): string {
    return this.getParamValue<string>('title')
  }

  get openUrls(): Array<any> {
    return this.getParamValue<Array<any>>('openUrls')
  }
}
