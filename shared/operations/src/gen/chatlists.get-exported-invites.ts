import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ChatlistsGetExportedInvitesValues {
  chatlist: any
}

export class ChatlistsGetExportedInvites extends TLMethod<ChatlistsGetExportedInvitesValues> {
  static override CONSTRUCTOR_ID = -838608253
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'chatlist',
      type: 'InputChatlist',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get chatlist(): any {
    return this.getParamValue<any>('chatlist')
  }
}
