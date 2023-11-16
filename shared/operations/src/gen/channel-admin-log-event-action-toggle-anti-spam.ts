import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelAdminLogEventActionToggleAntiSpamValues {
  newValue: any
}

export class ChannelAdminLogEventActionToggleAntiSpam extends TLConstructor<ChannelAdminLogEventActionToggleAntiSpamValues> {
  static override CONSTRUCTOR_ID: number = 1693675004
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
