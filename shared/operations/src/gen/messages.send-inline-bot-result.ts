import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesSendInlineBotResultValues {
  flags: any
  silent: boolean
  background: boolean
  clearDraft: boolean
  hideVia: boolean
  peer: any
  replyToMsgId: number
  topMsgId: number
  randomId: bigint
  queryId: bigint
  id: string
  scheduleDate: number
  sendAs: any
}

export class MessagesSendInlineBotResult extends TLMethod<MessagesSendInlineBotResultValues> {
  static override CONSTRUCTOR_ID = -738468661
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
      name: 'clear_draft',
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
      name: 'hide_via',
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
      flagIndex: 9,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'random_id',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'query_id',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'id',
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

  get clearDraft(): boolean {
    return this.getParamValue<boolean>('clearDraft')
  }

  get hideVia(): boolean {
    return this.getParamValue<boolean>('hideVia')
  }

  get peer(): any {
    return this.getParamValue<any>('peer')
  }

  get replyToMsgId(): number {
    return this.getParamValue<number>('replyToMsgId')
  }

  get topMsgId(): number {
    return this.getParamValue<number>('topMsgId')
  }

  get randomId(): bigint {
    return this.getParamValue<bigint>('randomId')
  }

  get queryId(): bigint {
    return this.getParamValue<bigint>('queryId')
  }

  get id(): string {
    return this.getParamValue<string>('id')
  }

  get scheduleDate(): number {
    return this.getParamValue<number>('scheduleDate')
  }

  get sendAs(): any {
    return this.getParamValue<any>('sendAs')
  }
}
