import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateChatDefaultBannedRightsValues {
  peer: any
  defaultBannedRights: any
  version: number
}

export class UpdateChatDefaultBannedRights extends TLConstructor<UpdateChatDefaultBannedRightsValues> {
  static override CONSTRUCTOR_ID: number = 1421875280
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'peer',
      type: 'Peer',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'default_banned_rights',
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
      name: 'version',
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

  get peer(): any {
    return this.getParamValue<any>('peer')
  }

  get defaultBannedRights(): any {
    return this.getParamValue<any>('defaultBannedRights')
  }

  get version(): number {
    return this.getParamValue<number>('version')
  }
}
