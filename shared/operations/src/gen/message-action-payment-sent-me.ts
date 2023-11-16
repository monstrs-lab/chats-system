import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageActionPaymentSentMeValues {
  flags: any
  recurringInit: boolean
  recurringUsed: boolean
  currency: string
  totalAmount: bigint
  payload: Buffer
  info: any
  shippingOptionId: string
  charge: any
}

export class MessageActionPaymentSentMe extends TLConstructor<MessageActionPaymentSentMeValues> {
  static override CONSTRUCTOR_ID: number = -1892568281
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
      name: 'recurring_init',
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
      name: 'recurring_used',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 3,
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
      name: 'total_amount',
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
      name: 'payload',
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
      name: 'info',
      type: 'PaymentRequestedInfo',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'shipping_option_id',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'charge',
      type: 'PaymentCharge',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get recurringInit(): boolean {
    return this.getParamValue<boolean>('recurringInit')
  }

  get recurringUsed(): boolean {
    return this.getParamValue<boolean>('recurringUsed')
  }

  get currency(): string {
    return this.getParamValue<string>('currency')
  }

  get totalAmount(): bigint {
    return this.getParamValue<bigint>('totalAmount')
  }

  get payload(): Buffer {
    return this.getParamValue<Buffer>('payload')
  }

  get info(): any {
    return this.getParamValue<any>('info')
  }

  get shippingOptionId(): string {
    return this.getParamValue<string>('shippingOptionId')
  }

  get charge(): any {
    return this.getParamValue<any>('charge')
  }
}
