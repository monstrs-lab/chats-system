import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountSaveSecureValueValues {
  value: any
  secureSecretId: bigint
}

export class AccountSaveSecureValue extends TLMethod<AccountSaveSecureValueValues> {
  static override CONSTRUCTOR_ID = -1986010339
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'value',
      type: 'InputSecureValue',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'secure_secret_id',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get value(): any {
    return this.getParamValue<any>('value')
  }

  get secureSecretId(): bigint {
    return this.getParamValue<bigint>('secureSecretId')
  }
}
