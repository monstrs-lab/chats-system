import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface SetClientDHParamsValues {
  nonce: bigint
  serverNonce: bigint
  encryptedData: Buffer
}

export class SetClientDHParams extends TLMethod<SetClientDHParamsValues> {
  static override CONSTRUCTOR_ID = -184262881
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'nonce',
      type: 'int128',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'server_nonce',
      type: 'int128',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'encrypted_data',
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

  get nonce(): bigint {
    return this.getParamValue<bigint>('nonce')
  }

  get serverNonce(): bigint {
    return this.getParamValue<bigint>('serverNonce')
  }

  get encryptedData(): Buffer {
    return this.getParamValue<Buffer>('encryptedData')
  }
}
