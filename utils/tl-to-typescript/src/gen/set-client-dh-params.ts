import type { TLSchemaParamParsed } from '@chats-system/tl-json-schema-parser'

import { TLMethod }                 from '@chats-system/tl-types'

export class SetClientDHParams extends TLMethod {
  static override CONSTRUCTOR_ID = -184262881
  static override PARAMS: Array<TLSchemaParamParsed> = [
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

  constructor(
    public readonly nonce: bigint,
    public readonly serverNonce: bigint,
    public readonly encryptedData: Buffer
  ) {
    super()
  }
}
