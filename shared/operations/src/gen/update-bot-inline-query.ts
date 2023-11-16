import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateBotInlineQueryValues {
  flags: any
  queryId: bigint
  userId: bigint
  query: string
  geo: any
  peerType: any
  offset: string
}

export class UpdateBotInlineQuery extends TLConstructor<UpdateBotInlineQueryValues> {
  static override CONSTRUCTOR_ID: number = 1232025500
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
      name: 'query_id',
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
      name: 'user_id',
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
      name: 'query',
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
      name: 'geo',
      type: 'GeoPoint',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'peer_type',
      type: 'InlineQueryPeerType',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'offset',
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

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get queryId(): bigint {
    return this.getParamValue<bigint>('queryId')
  }

  get userId(): bigint {
    return this.getParamValue<bigint>('userId')
  }

  get query(): string {
    return this.getParamValue<string>('query')
  }

  get geo(): any {
    return this.getParamValue<any>('geo')
  }

  get peerType(): any {
    return this.getParamValue<any>('peerType')
  }

  get offset(): string {
    return this.getParamValue<string>('offset')
  }
}