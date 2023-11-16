import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface BindAuthKeyInnerValues {
  nonce: bigint
  tempAuthKeyId: bigint
  permAuthKeyId: bigint
  tempSessionId: bigint
  expiresAt: number
}

export class BindAuthKeyInner extends TLConstructor<BindAuthKeyInnerValues> {
  static override CONSTRUCTOR_ID: number = 1973679973
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'nonce',
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
      name: 'temp_auth_key_id',
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
      name: 'perm_auth_key_id',
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
      name: 'temp_session_id',
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
      name: 'expires_at',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get nonce(): bigint {
    return this.getParamValue<bigint>('nonce')
  }

  get tempAuthKeyId(): bigint {
    return this.getParamValue<bigint>('tempAuthKeyId')
  }

  get permAuthKeyId(): bigint {
    return this.getParamValue<bigint>('permAuthKeyId')
  }

  get tempSessionId(): bigint {
    return this.getParamValue<bigint>('tempSessionId')
  }

  get expiresAt(): number {
    return this.getParamValue<number>('expiresAt')
  }
}
