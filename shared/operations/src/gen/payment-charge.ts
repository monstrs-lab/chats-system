import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PaymentChargeValues {
  id: string
  providerChargeId: string
}

export class PaymentCharge extends TLConstructor<PaymentChargeValues> {
  static override CONSTRUCTOR_ID: number = -368917890
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'id',
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
      name: 'provider_charge_id',
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

  get id(): string {
    return this.getParamValue<string>('id')
  }

  get providerChargeId(): string {
    return this.getParamValue<string>('providerChargeId')
  }
}
