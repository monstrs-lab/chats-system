import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputPaymentCredentialsApplePayValues {
  paymentData: any
}

export class InputPaymentCredentialsApplePay extends TLConstructor<InputPaymentCredentialsApplePayValues> {
  static override CONSTRUCTOR_ID: number = 178373535
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'payment_data',
      type: 'DataJSON',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get paymentData(): any {
    return this.getParamValue<any>('paymentData')
  }
}
