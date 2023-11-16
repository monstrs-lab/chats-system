import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountAcceptAuthorizationValues {
  botId: bigint
  scope: string
  publicKey: string
  valueHashes: Array<any>
  credentials: any
}

export class AccountAcceptAuthorization extends TLMethod<AccountAcceptAuthorizationValues> {
  static override CONSTRUCTOR_ID = -202552205
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'bot_id',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'scope',
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
      name: 'public_key',
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
      name: 'value_hashes',
      type: 'SecureValueHash',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'credentials',
      type: 'SecureCredentialsEncrypted',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get botId(): bigint {
    return this.getParamValue<bigint>('botId')
  }

  get scope(): string {
    return this.getParamValue<string>('scope')
  }

  get publicKey(): string {
    return this.getParamValue<string>('publicKey')
  }

  get valueHashes(): Array<any> {
    return this.getParamValue<Array<any>>('valueHashes')
  }

  get credentials(): any {
    return this.getParamValue<any>('credentials')
  }
}
