import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesSetBotShippingResultsValues {
  flags: any
  queryId: bigint
  error: string
  shippingOptions: Array<any>
}

export class MessagesSetBotShippingResults extends TLMethod<MessagesSetBotShippingResultsValues> {
  static override CONSTRUCTOR_ID = -436833542
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
      name: 'query_id',
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
      name: 'error',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'shipping_options',
      type: 'ShippingOption',
      isVector: true,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get queryId(): bigint {
    return this.getParamValue<bigint>('queryId')
  }

  get error(): string {
    return this.getParamValue<string>('error')
  }

  get shippingOptions(): Array<any> {
    return this.getParamValue<Array<any>>('shippingOptions')
  }
}
