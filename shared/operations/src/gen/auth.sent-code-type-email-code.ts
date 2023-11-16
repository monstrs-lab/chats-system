import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AuthSentCodeTypeEmailCodeValues {
  flags: any
  appleSigninAllowed: boolean
  googleSigninAllowed: boolean
  emailPattern: string
  length: number
  resetAvailablePeriod: number
  resetPendingDate: number
}

export class AuthSentCodeTypeEmailCode extends TLConstructor<AuthSentCodeTypeEmailCodeValues> {
  static override CONSTRUCTOR_ID: number = -196020837
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
    {
      name: 'email_pattern',
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
      name: 'length',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'reset_available_period',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'reset_pending_date',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 4,
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

  get emailPattern(): string {
    return this.getParamValue<string>('emailPattern')
  }

  get length(): number {
    return this.getParamValue<number>('length')
  }

  get resetAvailablePeriod(): number {
    return this.getParamValue<number>('resetAvailablePeriod')
  }

  get resetPendingDate(): number {
    return this.getParamValue<number>('resetPendingDate')
  }
}
