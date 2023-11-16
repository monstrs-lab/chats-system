import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ShippingOptionValues {
  id: string
  title: string
  prices: Array<any>
}

export class ShippingOption extends TLConstructor<ShippingOptionValues> {
  static override CONSTRUCTOR_ID: number = -1239335713
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
      name: 'prices',
      type: 'LabeledPrice',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get id(): string {
    return this.getParamValue<string>('id')
  }

  get title(): string {
    return this.getParamValue<string>('title')
  }

  get prices(): Array<any> {
    return this.getParamValue<Array<any>>('prices')
  }
}
