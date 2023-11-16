import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountGetSecureValueValues {
  types: Array<any>
}

export class AccountGetSecureValue extends TLMethod<AccountGetSecureValueValues> {
  static override CONSTRUCTOR_ID = 1936088002
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'types',
      type: 'SecureValueType',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get types(): Array<any> {
    return this.getParamValue<Array<any>>('types')
  }
}
