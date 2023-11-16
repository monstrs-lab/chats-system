import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelAdminLogEventActionChangeAvailableReactionsValues {
  prevValue: any
  newValue: any
}

export class ChannelAdminLogEventActionChangeAvailableReactions extends TLConstructor<ChannelAdminLogEventActionChangeAvailableReactionsValues> {
  static override CONSTRUCTOR_ID: number = -1102180616
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'prev_value',
      type: 'ChatReactions',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'new_value',
      type: 'ChatReactions',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get prevValue(): any {
    return this.getParamValue<any>('prevValue')
  }

  get newValue(): any {
    return this.getParamValue<any>('newValue')
  }
}