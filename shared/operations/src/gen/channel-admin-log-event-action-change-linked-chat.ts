import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelAdminLogEventActionChangeLinkedChatValues {
  prevValue: bigint
  newValue: bigint
}

export class ChannelAdminLogEventActionChangeLinkedChat extends TLConstructor<ChannelAdminLogEventActionChangeLinkedChatValues> {
  static override CONSTRUCTOR_ID: number = 84703944
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'prev_value',
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
      name: 'new_value',
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

  get prevValue(): bigint {
    return this.getParamValue<bigint>('prevValue')
  }

  get newValue(): bigint {
    return this.getParamValue<bigint>('newValue')
  }
}
