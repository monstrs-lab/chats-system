import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AccountDaysTTLValues {
  days: number
}

export class AccountDaysTTL extends TLConstructor<AccountDaysTTLValues> {
  static override CONSTRUCTOR_ID: number = -1194283041
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'days',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get days(): number {
    return this.getParamValue<number>('days')
  }
}
