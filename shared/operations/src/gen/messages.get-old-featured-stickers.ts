import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesGetOldFeaturedStickersValues {
  offset: number
  limit: number
  hash: bigint
}

export class MessagesGetOldFeaturedStickers extends TLMethod<MessagesGetOldFeaturedStickersValues> {
  static override CONSTRUCTOR_ID = 2127598753
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'offset',
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

  get offset(): number {
    return this.getParamValue<number>('offset')
  }

  get limit(): number {
    return this.getParamValue<number>('limit')
  }

  get hash(): bigint {
    return this.getParamValue<bigint>('hash')
  }
}
