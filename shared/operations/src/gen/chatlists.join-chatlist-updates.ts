import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ChatlistsJoinChatlistUpdatesValues {
  chatlist: any
  peers: Array<any>
}

export class ChatlistsJoinChatlistUpdates extends TLMethod<ChatlistsJoinChatlistUpdatesValues> {
  static override CONSTRUCTOR_ID = -527828747
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
    {
      name: 'peers',
      type: 'InputPeer',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get chatlist(): any {
    return this.getParamValue<any>('chatlist')
  }

  get peers(): Array<any> {
    return this.getParamValue<Array<any>>('peers')
  }
}
