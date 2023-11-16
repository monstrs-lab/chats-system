import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface PaymentsGetBankCardDataValues {
  number: string
}

export class PaymentsGetBankCardData extends TLMethod<PaymentsGetBankCardDataValues> {
  static override CONSTRUCTOR_ID = 779736953
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'number',
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

  get number(): string {
    return this.getParamValue<string>('number')
  }
}
