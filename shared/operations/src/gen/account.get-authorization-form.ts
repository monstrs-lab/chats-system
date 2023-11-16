import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountGetAuthorizationFormValues {
  botId: bigint
  scope: string
  publicKey: string
}

export class AccountGetAuthorizationForm extends TLMethod<AccountGetAuthorizationFormValues> {
  static override CONSTRUCTOR_ID = -1456907910
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
}
