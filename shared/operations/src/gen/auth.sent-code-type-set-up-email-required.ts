import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AuthSentCodeTypeSetUpEmailRequiredValues {
  flags: any
  appleSigninAllowed: boolean
  googleSigninAllowed: boolean
}

export class AuthSentCodeTypeSetUpEmailRequired extends TLConstructor<AuthSentCodeTypeSetUpEmailRequiredValues> {
  static override CONSTRUCTOR_ID: number = -1521934870
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
      name: 'apple_signin_allowed',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'google_signin_allowed',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get appleSigninAllowed(): boolean {
    return this.getParamValue<boolean>('appleSigninAllowed')
  }

  get googleSigninAllowed(): boolean {
    return this.getParamValue<boolean>('googleSigninAllowed')
  }
}
