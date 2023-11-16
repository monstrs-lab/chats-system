import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputStorePaymentGiftPremiumValues {
  userId: any
  currency: string
  amount: bigint
}

export class InputStorePaymentGiftPremium extends TLConstructor<InputStorePaymentGiftPremiumValues> {
  static override CONSTRUCTOR_ID: number = 1634697192
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'user_id',
      type: 'InputUser',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'currency',
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
      name: 'amount',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get userId(): any {
    return this.getParamValue<any>('userId')
  }

  get currency(): string {
    return this.getParamValue<string>('currency')
  }

  get amount(): bigint {
    return this.getParamValue<bigint>('amount')
  }
}
