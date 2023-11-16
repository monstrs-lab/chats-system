import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelAdminLogEventActionTogglePreHistoryHiddenValues {
  newValue: any
}

export class ChannelAdminLogEventActionTogglePreHistoryHidden extends TLConstructor<ChannelAdminLogEventActionTogglePreHistoryHiddenValues> {
  static override CONSTRUCTOR_ID: number = 1599903217
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'new_value',
      type: 'Bool',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get newValue(): any {
    return this.getParamValue<any>('newValue')
  }
}
