import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelAdminLogEventActionChangeHistoryTTLValues {
  prevValue: number
  newValue: number
}

export class ChannelAdminLogEventActionChangeHistoryTTL extends TLConstructor<ChannelAdminLogEventActionChangeHistoryTTLValues> {
  static override CONSTRUCTOR_ID: number = 1855199800
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'prev_value',
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
      name: 'new_value',
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

  get prevValue(): number {
    return this.getParamValue<number>('prevValue')
  }

  get newValue(): number {
    return this.getParamValue<number>('newValue')
  }
}
