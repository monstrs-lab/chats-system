import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountSetAccountTTLValues {
  ttl: any
}

export class AccountSetAccountTTL extends TLMethod<AccountSetAccountTTLValues> {
  static override CONSTRUCTOR_ID = 608323678
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'ttl',
      type: 'AccountDaysTTL',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get ttl(): any {
    return this.getParamValue<any>('ttl')
  }
}
