import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface PaymentsAssignPlayMarketTransactionValues {
  receipt: any
  purpose: any
}

export class PaymentsAssignPlayMarketTransaction extends TLMethod<PaymentsAssignPlayMarketTransactionValues> {
  static override CONSTRUCTOR_ID = -537046829
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'receipt',
      type: 'DataJSON',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'purpose',
      type: 'InputStorePaymentPurpose',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get receipt(): any {
    return this.getParamValue<any>('receipt')
  }

  get purpose(): any {
    return this.getParamValue<any>('purpose')
  }
}
