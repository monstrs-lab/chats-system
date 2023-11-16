import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputPaymentCredentialsGooglePayValues {
  paymentToken: any
}

export class InputPaymentCredentialsGooglePay extends TLConstructor<InputPaymentCredentialsGooglePayValues> {
  static override CONSTRUCTOR_ID: number = -1966921727
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'payment_token',
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

  get paymentToken(): any {
    return this.getParamValue<any>('paymentToken')
  }
}
