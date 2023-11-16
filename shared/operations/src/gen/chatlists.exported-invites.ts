import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChatlistsExportedInvitesValues {
  invites: Array<any>
  chats: Array<any>
  users: Array<any>
}

export class ChatlistsExportedInvites extends TLConstructor<ChatlistsExportedInvitesValues> {
  static override CONSTRUCTOR_ID: number = 279670215
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'invites',
      type: 'ExportedChatlistInvite',
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

  get invites(): Array<any> {
    return this.getParamValue<Array<any>>('invites')
  }

  get chats(): Array<any> {
    return this.getParamValue<Array<any>>('chats')
  }

  get users(): Array<any> {
    return this.getParamValue<Array<any>>('users')
  }
}
