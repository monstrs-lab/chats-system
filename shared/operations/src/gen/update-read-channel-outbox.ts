import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateReadChannelOutboxValues {
  channelId: bigint
  maxId: number
}

export class UpdateReadChannelOutbox extends TLConstructor<UpdateReadChannelOutboxValues> {
  static override CONSTRUCTOR_ID: number = -1218471511
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
      name: 'max_id',
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

  get channelId(): bigint {
    return this.getParamValue<bigint>('channelId')
  }

  get maxId(): number {
    return this.getParamValue<number>('maxId')
  }
}
