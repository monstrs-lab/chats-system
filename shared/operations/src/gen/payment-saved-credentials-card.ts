import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PaymentSavedCredentialsCardValues {
  id: string
  title: string
}

export class PaymentSavedCredentialsCard extends TLConstructor<PaymentSavedCredentialsCardValues> {
  static override CONSTRUCTOR_ID: number = -842892769
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
  ]

  get id(): string {
    return this.getParamValue<string>('id')
  }

  get title(): string {
    return this.getParamValue<string>('title')
  }
}
