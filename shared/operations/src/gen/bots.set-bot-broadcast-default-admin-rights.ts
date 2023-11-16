import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface BotsSetBotBroadcastDefaultAdminRightsValues {
  adminRights: any
}

export class BotsSetBotBroadcastDefaultAdminRights extends TLMethod<BotsSetBotBroadcastDefaultAdminRightsValues> {
  static override CONSTRUCTOR_ID = 2021942497
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'admin_rights',
      type: 'ChatAdminRights',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get adminRights(): any {
    return this.getParamValue<any>('adminRights')
  }
}
