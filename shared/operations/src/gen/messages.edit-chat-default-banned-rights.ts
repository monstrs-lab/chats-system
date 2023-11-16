import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesEditChatDefaultBannedRightsValues {
  peer: any
  bannedRights: any
}

export class MessagesEditChatDefaultBannedRights extends TLMethod<MessagesEditChatDefaultBannedRightsValues> {
  static override CONSTRUCTOR_ID = -1517917375
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'peer',
      type: 'InputPeer',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'banned_rights',
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

  get peer(): any {
    return this.getParamValue<any>('peer')
  }

  get bannedRights(): any {
    return this.getParamValue<any>('bannedRights')
  }
}
