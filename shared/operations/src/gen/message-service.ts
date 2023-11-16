import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageServiceValues {
  flags: any
  out: boolean
  mentioned: boolean
  mediaUnread: boolean
  silent: boolean
  post: boolean
  legacy: boolean
  id: number
  fromId: any
  peerId: any
  replyTo: any
  date: number
  action: any
  ttlPeriod: number
}

export class MessageService extends TLConstructor<MessageServiceValues> {
  static override CONSTRUCTOR_ID: number = 721967202
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
      name: 'action',
      type: 'MessageAction',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
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

  get legacy(): boolean {
    return this.getParamValue<boolean>('legacy')
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

  get replyTo(): any {
    return this.getParamValue<any>('replyTo')
  }

  get date(): number {
    return this.getParamValue<number>('date')
  }

  get action(): any {
    return this.getParamValue<any>('action')
  }

  get ttlPeriod(): number {
    return this.getParamValue<number>('ttlPeriod')
  }
}
