import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesDeleteRevokedExportedChatInvitesValues {
  peer: any
  adminId: any
}

export class MessagesDeleteRevokedExportedChatInvites extends TLMethod<MessagesDeleteRevokedExportedChatInvitesValues> {
  static override CONSTRUCTOR_ID = 1452833749
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
      name: 'admin_id',
      type: 'InputUser',
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

  get adminId(): any {
    return this.getParamValue<any>('adminId')
  }
}
