import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AuthAuthorizationSignUpRequiredValues {
  flags: any
  termsOfService: any
}

export class AuthAuthorizationSignUpRequired extends TLConstructor<AuthAuthorizationSignUpRequiredValues> {
  static override CONSTRUCTOR_ID: number = 1148485274
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
      name: 'terms_of_service',
      type: 'help.TermsOfService',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get termsOfService(): any {
    return this.getParamValue<any>('termsOfService')
  }
}
