import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateChannelMessageForwardsValues {
  channelId: bigint
  id: number
  forwards: number
}

export class UpdateChannelMessageForwards extends TLConstructor<UpdateChannelMessageForwardsValues> {
  static override CONSTRUCTOR_ID: number = -761649164
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
      name: 'id',
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
      name: 'forwards',
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

  get id(): number {
    return this.getParamValue<number>('id')
  }

  get forwards(): number {
    return this.getParamValue<number>('forwards')
  }
}
