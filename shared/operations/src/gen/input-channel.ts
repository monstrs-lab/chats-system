import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputChannelValues {
  channelId: bigint
  accessHash: bigint
}

export class InputChannel extends TLConstructor<InputChannelValues> {
  static override CONSTRUCTOR_ID: number = -212145112
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'channel_id',
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
      name: 'access_hash',
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

  get channelId(): bigint {
    return this.getParamValue<bigint>('channelId')
  }

  get accessHash(): bigint {
    return this.getParamValue<bigint>('accessHash')
  }
}
