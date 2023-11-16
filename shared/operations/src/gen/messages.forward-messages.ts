import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesForwardMessagesValues {
  flags: any
  silent: boolean
  background: boolean
  withMyScore: boolean
  dropAuthor: boolean
  dropMediaCaptions: boolean
  noforwards: boolean
  fromPeer: any
  id: Array<number>
  randomId: Array<bigint>
  toPeer: any
  topMsgId: number
  scheduleDate: number
  sendAs: any
}

export class MessagesForwardMessages extends TLMethod<MessagesForwardMessagesValues> {
  static override CONSTRUCTOR_ID = -966673468
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
      name: 'silent',
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
      name: 'background',
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
      name: 'with_my_score',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 8,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'drop_author',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 11,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'drop_media_captions',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 12,
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
      flagIndex: 14,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'from_peer',
      type: 'InputPeer',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'id',
      type: 'int',
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'random_id',
      type: 'long',
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'to_peer',
      type: 'InputPeer',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'top_msg_id',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 9,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'schedule_date',
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
      name: 'send_as',
      type: 'InputPeer',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 13,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get silent(): boolean {
    return this.getParamValue<boolean>('silent')
  }

  get background(): boolean {
    return this.getParamValue<boolean>('background')
  }

  get withMyScore(): boolean {
    return this.getParamValue<boolean>('withMyScore')
  }

  get dropAuthor(): boolean {
    return this.getParamValue<boolean>('dropAuthor')
  }

  get dropMediaCaptions(): boolean {
    return this.getParamValue<boolean>('dropMediaCaptions')
  }

  get noforwards(): boolean {
    return this.getParamValue<boolean>('noforwards')
  }

  get fromPeer(): any {
    return this.getParamValue<any>('fromPeer')
  }

  get id(): Array<number> {
    return this.getParamValue<Array<number>>('id')
  }

  get randomId(): Array<bigint> {
    return this.getParamValue<Array<bigint>>('randomId')
  }

  get toPeer(): any {
    return this.getParamValue<any>('toPeer')
  }

  get topMsgId(): number {
    return this.getParamValue<number>('topMsgId')
  }

  get scheduleDate(): number {
    return this.getParamValue<number>('scheduleDate')
  }

  get sendAs(): any {
    return this.getParamValue<any>('sendAs')
  }
}