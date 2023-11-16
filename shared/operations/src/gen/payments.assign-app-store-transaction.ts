import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface PaymentsAssignAppStoreTransactionValues {
  receipt: Buffer
  purpose: any
}

export class PaymentsAssignAppStoreTransaction extends TLMethod<PaymentsAssignAppStoreTransactionValues> {
  static override CONSTRUCTOR_ID = -2131921795
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'receipt',
      type: 'bytes',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
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

  get receipt(): Buffer {
    return this.getParamValue<Buffer>('receipt')
  }

  get purpose(): any {
    return this.getParamValue<any>('purpose')
  }
}