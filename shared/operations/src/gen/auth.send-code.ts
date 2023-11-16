import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AuthSendCodeValues {
  phoneNumber: string
  apiId: number
  apiHash: string
  settings: any
}

export class AuthSendCode extends TLMethod<AuthSendCodeValues> {
  static override CONSTRUCTOR_ID = -1502141361
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
      name: 'api_id',
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
      name: 'api_hash',
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
      name: 'settings',
      type: 'CodeSettings',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get phoneNumber(): string {
    return this.getParamValue<string>('phoneNumber')
  }

  get apiId(): number {
    return this.getParamValue<number>('apiId')
  }

  get apiHash(): string {
    return this.getParamValue<string>('apiHash')
  }

  get settings(): any {
    return this.getParamValue<any>('settings')
  }
}
