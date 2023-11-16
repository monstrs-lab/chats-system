import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChatlistsChatlistUpdatesValues {
  missingPeers: Array<any>
  chats: Array<any>
  users: Array<any>
}

export class ChatlistsChatlistUpdates extends TLConstructor<ChatlistsChatlistUpdatesValues> {
  static override CONSTRUCTOR_ID: number = -1816295539
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'missing_peers',
      type: 'Peer',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'chats',
      type: 'Chat',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'users',
      type: 'User',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get missingPeers(): Array<any> {
    return this.getParamValue<Array<any>>('missingPeers')
  }

  get chats(): Array<any> {
    return this.getParamValue<Array<any>>('chats')
  }

  get users(): Array<any> {
    return this.getParamValue<Array<any>>('users')
  }
}
