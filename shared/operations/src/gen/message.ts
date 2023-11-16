import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageValues {
  flags: any
  out: boolean
  mentioned: boolean
  mediaUnread: boolean
  silent: boolean
  post: boolean
  fromScheduled: boolean
  legacy: boolean
  editHide: boolean
  pinned: boolean
  noforwards: boolean
  id: number
  fromId: any
  peerId: any
  fwdFrom: any
  viaBotId: bigint
  replyTo: any
  date: number
  message: string
  media: any
  replyMarkup: any
  entities: Array<any>
  views: number
  forwards: number
  replies: any
  editDate: number
  postAuthor: string
  groupedId: bigint
  reactions: any
  restrictionReason: Array<any>
  ttlPeriod: number
}

export class Message extends TLConstructor<MessageValues> {
  static override CONSTRUCTOR_ID: number = 940666592
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
      name: 'out',
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
      name: 'mentioned',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'media_unread',
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
      name: 'silent',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 13,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'post',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 14,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'from_scheduled',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 18,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'legacy',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 19,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'edit_hide',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 21,
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
      flagIndex: 24,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'noforwards',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 26,
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
      name: 'from_id',
      type: 'Peer',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 8,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'peer_id',
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
      name: 'fwd_from',
      type: 'MessageFwdHeader',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'via_bot_id',
      type: 'long',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 11,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'reply_to',
      type: 'MessageReplyHeader',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 3,
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
      name: 'message',
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
      name: 'media',
      type: 'MessageMedia',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 9,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'reply_markup',
      type: 'ReplyMarkup',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 6,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'entities',
      type: 'MessageEntity',
      isVector: true,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 7,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'views',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 10,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'forwards',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 10,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'replies',
      type: 'MessageReplies',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 23,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'edit_date',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 15,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'post_author',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 16,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'grouped_id',
      type: 'long',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 17,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'reactions',
      type: 'MessageReactions',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 20,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'restriction_reason',
      type: 'RestrictionReason',
      isVector: true,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 22,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'ttl_period',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 25,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get out(): boolean {
    return this.getParamValue<boolean>('out')
  }

  get mentioned(): boolean {
    return this.getParamValue<boolean>('mentioned')
  }

  get mediaUnread(): boolean {
    return this.getParamValue<boolean>('mediaUnread')
  }

  get silent(): boolean {
    return this.getParamValue<boolean>('silent')
  }

  get post(): boolean {
    return this.getParamValue<boolean>('post')
  }

  get fromScheduled(): boolean {
    return this.getParamValue<boolean>('fromScheduled')
  }

  get legacy(): boolean {
    return this.getParamValue<boolean>('legacy')
  }

  get editHide(): boolean {
    return this.getParamValue<boolean>('editHide')
  }

  get pinned(): boolean {
    return this.getParamValue<boolean>('pinned')
  }

  get noforwards(): boolean {
    return this.getParamValue<boolean>('noforwards')
  }

  get id(): number {
    return this.getParamValue<number>('id')
  }

  get fromId(): any {
    return this.getParamValue<any>('fromId')
  }

  get peerId(): any {
    return this.getParamValue<any>('peerId')
  }

  get fwdFrom(): any {
    return this.getParamValue<any>('fwdFrom')
  }

  get viaBotId(): bigint {
    return this.getParamValue<bigint>('viaBotId')
  }

  get replyTo(): any {
    return this.getParamValue<any>('replyTo')
  }

  get date(): number {
    return this.getParamValue<number>('date')
  }

  get message(): string {
    return this.getParamValue<string>('message')
  }

  get media(): any {
    return this.getParamValue<any>('media')
  }

  get replyMarkup(): any {
    return this.getParamValue<any>('replyMarkup')
  }

  get entities(): Array<any> {
    return this.getParamValue<Array<any>>('entities')
  }

  get views(): number {
    return this.getParamValue<number>('views')
  }

  get forwards(): number {
    return this.getParamValue<number>('forwards')
  }

  get replies(): any {
    return this.getParamValue<any>('replies')
  }

  get editDate(): number {
    return this.getParamValue<number>('editDate')
  }

  get postAuthor(): string {
    return this.getParamValue<string>('postAuthor')
  }

  get groupedId(): bigint {
    return this.getParamValue<bigint>('groupedId')
  }

  get reactions(): any {
    return this.getParamValue<any>('reactions')
  }

  get restrictionReason(): Array<any> {
    return this.getParamValue<Array<any>>('restrictionReason')
  }

  get ttlPeriod(): number {
    return this.getParamValue<number>('ttlPeriod')
  }
}
