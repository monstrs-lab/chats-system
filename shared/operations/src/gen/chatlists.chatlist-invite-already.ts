import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChatlistsChatlistInviteAlreadyValues {
  filterId: number
  missingPeers: Array<any>
  alreadyPeers: Array<any>
  chats: Array<any>
  users: Array<any>
}

export class ChatlistsChatlistInviteAlready extends TLConstructor<ChatlistsChatlistInviteAlreadyValues> {
  static override CONSTRUCTOR_ID: number = -91752871
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'filter_id',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
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
      name: 'already_peers',
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

  get filterId(): number {
    return this.getParamValue<number>('filterId')
  }

  get missingPeers(): Array<any> {
    return this.getParamValue<Array<any>>('missingPeers')
  }

  get alreadyPeers(): Array<any> {
    return this.getParamValue<Array<any>>('alreadyPeers')
  }

  get chats(): Array<any> {
    return this.getParamValue<Array<any>>('chats')
  }

  get users(): Array<any> {
    return this.getParamValue<Array<any>>('users')
  }
}
