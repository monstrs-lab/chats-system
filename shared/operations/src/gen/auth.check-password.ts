import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AuthCheckPasswordValues {
  password: any
}

export class AuthCheckPassword extends TLMethod<AuthCheckPasswordValues> {
  static override CONSTRUCTOR_ID = -779399914
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'password',
      type: 'InputCheckPasswordSRP',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get password(): any {
    return this.getParamValue<any>('password')
  }
}
