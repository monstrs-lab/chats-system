import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PremiumSubscriptionOptionValues {
  flags: any
  current: boolean
  canPurchaseUpgrade: boolean
  transaction: string
  months: number
  currency: string
  amount: bigint
  botUrl: string
  storeProduct: string
}

export class PremiumSubscriptionOption extends TLConstructor<PremiumSubscriptionOptionValues> {
  static override CONSTRUCTOR_ID: number = 1596792306
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
      name: 'current',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'can_purchase_upgrade',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'transaction',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'months',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
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
    {
      name: 'bot_url',
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
      name: 'store_product',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get current(): boolean {
    return this.getParamValue<boolean>('current')
  }

  get canPurchaseUpgrade(): boolean {
    return this.getParamValue<boolean>('canPurchaseUpgrade')
  }

  get transaction(): string {
    return this.getParamValue<string>('transaction')
  }

  get months(): number {
    return this.getParamValue<number>('months')
  }

  get currency(): string {
    return this.getParamValue<string>('currency')
  }

  get amount(): bigint {
    return this.getParamValue<bigint>('amount')
  }

  get botUrl(): string {
    return this.getParamValue<string>('botUrl')
  }

  get storeProduct(): string {
    return this.getParamValue<string>('storeProduct')
  }
}
