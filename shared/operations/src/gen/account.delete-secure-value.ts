import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountDeleteSecureValueValues {
  types: Array<any>
}

export class AccountDeleteSecureValue extends TLMethod<AccountDeleteSecureValueValues> {
  static override CONSTRUCTOR_ID = -1199522741
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
