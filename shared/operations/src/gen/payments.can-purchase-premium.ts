import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface PaymentsCanPurchasePremiumValues {
  purpose: any
}

export class PaymentsCanPurchasePremium extends TLMethod<PaymentsCanPurchasePremiumValues> {
  static override CONSTRUCTOR_ID = -1614700874
  static override PARAMS: Array<TLExtendedSchemaParam> = [
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

  get purpose(): any {
    return this.getParamValue<any>('purpose')
  }
}
