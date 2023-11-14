import type { TLSchemaParamParsed } from '@chats-system/tl-json-schema-parser'

import { TLConstructor }            from '@chats-system/tl-types'

export class ResPQ extends TLConstructor {
  static override CONSTRUCTOR_ID: number = 85337187
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
      name: 'pq',
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
      name: 'server_public_key_fingerprints',
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

  constructor(
    public readonly nonce: bigint,
    public readonly server_nonce: bigint,
    public readonly pq: Buffer,
    public readonly server_public_key_fingerprints: Array<bigint>
  ) {
    super()
  }
}
