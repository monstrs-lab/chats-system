import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface GroupCallStreamChannelValues {
  channel: number
  scale: number
  lastTimestampMs: bigint
}

export class GroupCallStreamChannel extends TLConstructor<GroupCallStreamChannelValues> {
  static override CONSTRUCTOR_ID: number = -2132064081
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'channel',
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
      name: 'scale',
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
      name: 'last_timestamp_ms',
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

  get channel(): number {
    return this.getParamValue<number>('channel')
  }

  get scale(): number {
    return this.getParamValue<number>('scale')
  }

  get lastTimestampMs(): bigint {
    return this.getParamValue<bigint>('lastTimestampMs')
  }
}
