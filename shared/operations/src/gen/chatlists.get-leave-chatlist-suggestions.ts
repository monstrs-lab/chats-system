import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ChatlistsGetLeaveChatlistSuggestionsValues {
  chatlist: any
}

export class ChatlistsGetLeaveChatlistSuggestions extends TLMethod<ChatlistsGetLeaveChatlistSuggestionsValues> {
  static override CONSTRUCTOR_ID = -37955820
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
