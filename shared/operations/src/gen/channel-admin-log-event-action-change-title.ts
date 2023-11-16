import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelAdminLogEventActionChangeTitleValues {
  prevValue: string
  newValue: string
}

export class ChannelAdminLogEventActionChangeTitle extends TLConstructor<ChannelAdminLogEventActionChangeTitleValues> {
  static override CONSTRUCTOR_ID: number = -421545947
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'prev_value',
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
      name: 'new_value',
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

  get prevValue(): string {
    return this.getParamValue<string>('prevValue')
  }

  get newValue(): string {
    return this.getParamValue<string>('newValue')
  }
}
