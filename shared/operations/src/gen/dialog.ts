import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface DialogValues {
  flags: any
  pinned: boolean
  unreadMark: boolean
  viewForumAsMessages: boolean
  peer: any
  topMessage: number
  readInboxMaxId: number
  readOutboxMaxId: number
  unreadCount: number
  unreadMentionsCount: number
  unreadReactionsCount: number
  notifySettings: any
  pts: number
  draft: any
  folderId: number
  ttlPeriod: number
}

export class Dialog extends TLConstructor<DialogValues> {
  static override CONSTRUCTOR_ID: number = -712374074
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'flags',
      type: '#',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: true,
      useVectorId: false,
    },
    {
      name: 'pinned',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'unread_mark',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'view_forum_as_messages',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 6,
      flagIndicator: false,
      useVectorId: false,
    },
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
      name: 'top_message',
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
      name: 'read_inbox_max_id',
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
      name: 'read_outbox_max_id',
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
      name: 'unread_count',
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
      name: 'unread_mentions_count',
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
      name: 'unread_reactions_count',
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
      name: 'notify_settings',
      type: 'PeerNotifySettings',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'pts',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'draft',
      type: 'DraftMessage',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'folder_id',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'ttl_period',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 5,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get pinned(): boolean {
    return this.getParamValue<boolean>('pinned')
  }

  get unreadMark(): boolean {
    return this.getParamValue<boolean>('unreadMark')
  }

  get viewForumAsMessages(): boolean {
    return this.getParamValue<boolean>('viewForumAsMessages')
  }

  get peer(): any {
    return this.getParamValue<any>('peer')
  }

  get topMessage(): number {
    return this.getParamValue<number>('topMessage')
  }

  get readInboxMaxId(): number {
    return this.getParamValue<number>('readInboxMaxId')
  }

  get readOutboxMaxId(): number {
    return this.getParamValue<number>('readOutboxMaxId')
  }

  get unreadCount(): number {
    return this.getParamValue<number>('unreadCount')
  }

  get unreadMentionsCount(): number {
    return this.getParamValue<number>('unreadMentionsCount')
  }

  get unreadReactionsCount(): number {
    return this.getParamValue<number>('unreadReactionsCount')
  }

  get notifySettings(): any {
    return this.getParamValue<any>('notifySettings')
  }

  get pts(): number {
    return this.getParamValue<number>('pts')
  }

  get draft(): any {
    return this.getParamValue<any>('draft')
  }

  get folderId(): number {
    return this.getParamValue<number>('folderId')
  }

  get ttlPeriod(): number {
    return this.getParamValue<number>('ttlPeriod')
  }
}
