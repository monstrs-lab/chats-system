import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface BotInlineMessageMediaInvoiceValues {
  flags: any
  shippingAddressRequested: boolean
  test: boolean
  title: string
  description: string
  photo: any
  currency: string
  totalAmount: bigint
  replyMarkup: any
}

export class BotInlineMessageMediaInvoice extends TLConstructor<BotInlineMessageMediaInvoiceValues> {
  static override CONSTRUCTOR_ID: number = 894081801
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
      name: 'shipping_address_requested',
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
      name: 'test',
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
      name: 'title',
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
      name: 'description',
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
      name: 'photo',
      type: 'WebDocument',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 0,
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
      name: 'reply_markup',
      type: 'ReplyMarkup',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get shippingAddressRequested(): boolean {
    return this.getParamValue<boolean>('shippingAddressRequested')
  }

  get test(): boolean {
    return this.getParamValue<boolean>('test')
  }

  get title(): string {
    return this.getParamValue<string>('title')
  }

  get description(): string {
    return this.getParamValue<string>('description')
  }

  get photo(): any {
    return this.getParamValue<any>('photo')
  }

  get currency(): string {
    return this.getParamValue<string>('currency')
  }

  get totalAmount(): bigint {
    return this.getParamValue<bigint>('totalAmount')
  }

  get replyMarkup(): any {
    return this.getParamValue<any>('replyMarkup')
  }
}
