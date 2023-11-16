import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface BotsSetBotGroupDefaultAdminRightsValues {
  adminRights: any
}

export class BotsSetBotGroupDefaultAdminRights extends TLMethod<BotsSetBotGroupDefaultAdminRightsValues> {
  static override CONSTRUCTOR_ID = -1839281686
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
