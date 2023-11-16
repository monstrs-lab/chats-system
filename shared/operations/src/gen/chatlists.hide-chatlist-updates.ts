import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ChatlistsHideChatlistUpdatesValues {
  chatlist: any
}

export class ChatlistsHideChatlistUpdates extends TLMethod<ChatlistsHideChatlistUpdatesValues> {
  static override CONSTRUCTOR_ID = 1726252795
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
