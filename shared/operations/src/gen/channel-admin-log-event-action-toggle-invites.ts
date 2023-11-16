import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelAdminLogEventActionToggleInvitesValues {
  newValue: any
}

export class ChannelAdminLogEventActionToggleInvites extends TLConstructor<ChannelAdminLogEventActionToggleInvitesValues> {
  static override CONSTRUCTOR_ID: number = 460916654
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
