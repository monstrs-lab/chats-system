import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesGetRecentReactionsValues {
  limit: number
  hash: bigint
}

export class MessagesGetRecentReactions extends TLMethod<MessagesGetRecentReactionsValues> {
  static override CONSTRUCTOR_ID = 960896434
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'limit',
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
      name: 'hash',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get limit(): number {
    return this.getParamValue<number>('limit')
  }

  get hash(): bigint {
    return this.getParamValue<bigint>('hash')
  }
}
