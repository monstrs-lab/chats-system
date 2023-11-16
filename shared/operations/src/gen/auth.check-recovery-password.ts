import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AuthCheckRecoveryPasswordValues {
  code: string
}

export class AuthCheckRecoveryPassword extends TLMethod<AuthCheckRecoveryPasswordValues> {
  static override CONSTRUCTOR_ID = 221691769
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'code',
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

  get code(): string {
    return this.getParamValue<string>('code')
  }
}
