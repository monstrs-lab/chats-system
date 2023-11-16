import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AuthImportBotAuthorizationValues {
  flags: number
  apiId: number
  apiHash: string
  botAuthToken: string
}

export class AuthImportBotAuthorization extends TLMethod<AuthImportBotAuthorizationValues> {
  static override CONSTRUCTOR_ID = 1738800940
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'flags',
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
      name: 'bot_auth_token',
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

  get flags(): number {
    return this.getParamValue<number>('flags')
  }

  get apiId(): number {
    return this.getParamValue<number>('apiId')
  }

  get apiHash(): string {
    return this.getParamValue<string>('apiHash')
  }

  get botAuthToken(): string {
    return this.getParamValue<string>('botAuthToken')
  }
}
