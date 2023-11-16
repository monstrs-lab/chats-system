import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface PaymentsGetPaymentFormValues {
  flags: any
  invoice: any
  themeParams: any
}

export class PaymentsGetPaymentForm extends TLMethod<PaymentsGetPaymentFormValues> {
  static override CONSTRUCTOR_ID = 924093883
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'flags',
      type: '#',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: true,
      useVectorId: false,
    },
    {
      name: 'invoice',
      type: 'InputInvoice',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'theme_params',
      type: 'DataJSON',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get invoice(): any {
    return this.getParamValue<any>('invoice')
  }

  get themeParams(): any {
    return this.getParamValue<any>('themeParams')
  }
}
