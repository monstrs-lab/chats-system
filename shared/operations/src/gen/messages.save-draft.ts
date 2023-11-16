import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesSaveDraftValues {
  flags: any
  noWebpage: boolean
  replyToMsgId: number
  topMsgId: number
  peer: any
  message: string
  entities: Array<any>
}

export class MessagesSaveDraft extends TLMethod<MessagesSaveDraftValues> {
  static override CONSTRUCTOR_ID = -1271718337
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
      name: 'no_webpage',
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
      name: 'reply_to_msg_id',
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
      name: 'top_msg_id',
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
      name: 'peer',
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
      name: 'entities',
      type: 'MessageEntity',
      isVector: true,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get noWebpage(): boolean {
    return this.getParamValue<boolean>('noWebpage')
  }

  get replyToMsgId(): number {
    return this.getParamValue<number>('replyToMsgId')
  }

  get topMsgId(): number {
    return this.getParamValue<number>('topMsgId')
  }

  get peer(): any {
    return this.getParamValue<any>('peer')
  }

  get message(): string {
    return this.getParamValue<string>('message')
  }

  get entities(): Array<any> {
    return this.getParamValue<Array<any>>('entities')
  }
}
