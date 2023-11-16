import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AuthBindTempAuthKeyValues {
  permAuthKeyId: bigint
  nonce: bigint
  expiresAt: number
  encryptedMessage: Buffer
}

export class AuthBindTempAuthKey extends TLMethod<AuthBindTempAuthKeyValues> {
  static override CONSTRUCTOR_ID = -841733627
  static override PARAMS: Array<TLExtendedSchemaParam> = [
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
    {
      name: 'encrypted_message',
      type: 'bytes',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get permAuthKeyId(): bigint {
    return this.getParamValue<bigint>('permAuthKeyId')
  }

  get nonce(): bigint {
    return this.getParamValue<bigint>('nonce')
  }

  get expiresAt(): number {
    return this.getParamValue<number>('expiresAt')
  }

  get encryptedMessage(): Buffer {
    return this.getParamValue<Buffer>('encryptedMessage')
  }
}
