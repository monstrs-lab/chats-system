import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AccountAuthorizationFormValues {
  flags: any
  requiredTypes: Array<any>
  values: Array<any>
  errors: Array<any>
  users: Array<any>
  privacyPolicyUrl: string
}

export class AccountAuthorizationForm extends TLConstructor<AccountAuthorizationFormValues> {
  static override CONSTRUCTOR_ID: number = -1389486888
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'flags',
      type: '#',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: true,
      useVectorId: false,
    },
    {
      name: 'required_types',
      type: 'SecureRequiredType',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'values',
      type: 'SecureValue',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'errors',
      type: 'SecureValueError',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'users',
      type: 'User',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'privacy_policy_url',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get requiredTypes(): Array<any> {
    return this.getParamValue<Array<any>>('requiredTypes')
  }

  get values(): Array<any> {
    return this.getParamValue<Array<any>>('values')
  }

  get errors(): Array<any> {
    return this.getParamValue<Array<any>>('errors')
  }

  get users(): Array<any> {
    return this.getParamValue<Array<any>>('users')
  }

  get privacyPolicyUrl(): string {
    return this.getParamValue<string>('privacyPolicyUrl')
  }
}
