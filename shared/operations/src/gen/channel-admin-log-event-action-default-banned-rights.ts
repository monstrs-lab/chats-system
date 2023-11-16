import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelAdminLogEventActionDefaultBannedRightsValues {
  prevBannedRights: any
  newBannedRights: any
}

export class ChannelAdminLogEventActionDefaultBannedRights extends TLConstructor<ChannelAdminLogEventActionDefaultBannedRightsValues> {
  static override CONSTRUCTOR_ID: number = 771095562
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'prev_banned_rights',
      type: 'ChatBannedRights',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'new_banned_rights',
      type: 'ChatBannedRights',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get prevBannedRights(): any {
    return this.getParamValue<any>('prevBannedRights')
  }

  get newBannedRights(): any {
    return this.getParamValue<any>('newBannedRights')
  }
}
