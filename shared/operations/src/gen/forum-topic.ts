import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ForumTopicValues {
  flags: any
  my: boolean
  closed: boolean
  pinned: boolean
  short: boolean
  hidden: boolean
  id: number
  date: number
  title: string
  iconColor: number
  iconEmojiId: bigint
  topMessage: number
  readInboxMaxId: number
  readOutboxMaxId: number
  unreadCount: number
  unreadMentionsCount: number
  unreadReactionsCount: number
  fromId: any
  notifySettings: any
  draft: any
}

export class ForumTopic extends TLConstructor<ForumTopicValues> {
  static override CONSTRUCTOR_ID: number = 1903173033
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
      name: 'my',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'closed',
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
      name: 'pinned',
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
      name: 'short',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 5,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'hidden',
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
      name: 'id',
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
      name: 'date',
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
      name: 'title',
      type: 'string',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'icon_color',
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
      name: 'icon_emoji_id',
      type: 'long',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
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
      name: 'from_id',
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
      name: 'draft',
      type: 'DraftMessage',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get my(): boolean {
    return this.getParamValue<boolean>('my')
  }

  get closed(): boolean {
    return this.getParamValue<boolean>('closed')
  }

  get pinned(): boolean {
    return this.getParamValue<boolean>('pinned')
  }

  get short(): boolean {
    return this.getParamValue<boolean>('short')
  }

  get hidden(): boolean {
    return this.getParamValue<boolean>('hidden')
  }

  get id(): number {
    return this.getParamValue<number>('id')
  }

  get date(): number {
    return this.getParamValue<number>('date')
  }

  get title(): string {
    return this.getParamValue<string>('title')
  }

  get iconColor(): number {
    return this.getParamValue<number>('iconColor')
  }

  get iconEmojiId(): bigint {
    return this.getParamValue<bigint>('iconEmojiId')
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

  get fromId(): any {
    return this.getParamValue<any>('fromId')
  }

  get notifySettings(): any {
    return this.getParamValue<any>('notifySettings')
  }

  get draft(): any {
    return this.getParamValue<any>('draft')
  }
}