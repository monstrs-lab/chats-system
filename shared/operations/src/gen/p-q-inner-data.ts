import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PQInnerDataValues {
  pq: string
  p: string
  q: string
  nonce: bigint
  serverNonce: bigint
  newNonce: bigint
}

export class PQInnerData extends TLConstructor<PQInnerDataValues> {
  static override CONSTRUCTOR_ID: number = -2083955988
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'pq',
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
      name: 'p',
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
      name: 'q',
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
      name: 'new_nonce',
      type: 'int256',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get pq(): string {
    return this.getParamValue<string>('pq')
  }

  get p(): string {
    return this.getParamValue<string>('p')
  }

  get q(): string {
    return this.getParamValue<string>('q')
  }

  get nonce(): bigint {
    return this.getParamValue<bigint>('nonce')
  }

  get serverNonce(): bigint {
    return this.getParamValue<bigint>('serverNonce')
  }

  get newNonce(): bigint {
    return this.getParamValue<bigint>('newNonce')
  }
}
