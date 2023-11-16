import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountRegisterDeviceValues {
  flags: any
  noMuted: boolean
  tokenType: number
  token: string
  appSandbox: any
  secret: Buffer
  otherUids: Array<bigint>
}

export class AccountRegisterDevice extends TLMethod<AccountRegisterDeviceValues> {
  static override CONSTRUCTOR_ID = -326762118
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
      name: 'no_muted',
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
      name: 'token_type',
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
      name: 'token',
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
      name: 'app_sandbox',
      type: 'Bool',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'secret',
      type: 'bytes',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'other_uids',
      type: 'long',
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get noMuted(): boolean {
    return this.getParamValue<boolean>('noMuted')
  }

  get tokenType(): number {
    return this.getParamValue<number>('tokenType')
  }

  get token(): string {
    return this.getParamValue<string>('token')
  }

  get appSandbox(): any {
    return this.getParamValue<any>('appSandbox')
  }

  get secret(): Buffer {
    return this.getParamValue<Buffer>('secret')
  }

  get otherUids(): Array<bigint> {
    return this.getParamValue<Array<bigint>>('otherUids')
  }
}
