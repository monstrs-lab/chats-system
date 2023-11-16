import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AccountResetPasswordFailedWaitValues {
  retryDate: number
}

export class AccountResetPasswordFailedWait extends TLConstructor<AccountResetPasswordFailedWaitValues> {
  static override CONSTRUCTOR_ID: number = -478701471
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'retry_date',
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

  get retryDate(): number {
    return this.getParamValue<number>('retryDate')
  }
}
