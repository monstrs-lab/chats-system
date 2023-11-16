import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AuthSignUpValues {
  phoneNumber: string
  phoneCodeHash: string
  firstName: string
  lastName: string
}

export class AuthSignUp extends TLMethod<AuthSignUpValues> {
  static override CONSTRUCTOR_ID = -2131827673
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'phone_number',
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
      name: 'phone_code_hash',
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
      name: 'first_name',
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
      name: 'last_name',
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

  get phoneNumber(): string {
    return this.getParamValue<string>('phoneNumber')
  }

  get phoneCodeHash(): string {
    return this.getParamValue<string>('phoneCodeHash')
  }

  get firstName(): string {
    return this.getParamValue<string>('firstName')
  }

  get lastName(): string {
    return this.getParamValue<string>('lastName')
  }
}
