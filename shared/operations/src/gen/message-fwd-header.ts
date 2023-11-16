import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageFwdHeaderValues {
  flags: any
  imported: boolean
  fromId: any
  fromName: string
  date: number
  channelPost: number
  postAuthor: string
  savedFromPeer: any
  savedFromMsgId: number
  psaType: string
}

export class MessageFwdHeader extends TLConstructor<MessageFwdHeaderValues> {
  static override CONSTRUCTOR_ID: number = 1601666510
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
      name: 'imported',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 7,
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
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'from_name',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 5,
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
      name: 'channel_post',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
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
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'saved_from_peer',
      type: 'Peer',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'saved_from_msg_id',
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
      name: 'psa_type',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 6,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get imported(): boolean {
    return this.getParamValue<boolean>('imported')
  }

  get fromId(): any {
    return this.getParamValue<any>('fromId')
  }

  get fromName(): string {
    return this.getParamValue<string>('fromName')
  }

  get date(): number {
    return this.getParamValue<number>('date')
  }

  get channelPost(): number {
    return this.getParamValue<number>('channelPost')
  }

  get postAuthor(): string {
    return this.getParamValue<string>('postAuthor')
  }

  get savedFromPeer(): any {
    return this.getParamValue<any>('savedFromPeer')
  }

  get savedFromMsgId(): number {
    return this.getParamValue<number>('savedFromMsgId')
  }

  get psaType(): string {
    return this.getParamValue<string>('psaType')
  }
}