import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesEditInlineBotMessageValues {
  flags: any
  noWebpage: boolean
  id: any
  message: string
  media: any
  replyMarkup: any
  entities: Array<any>
}

export class MessagesEditInlineBotMessage extends TLMethod<MessagesEditInlineBotMessageValues> {
  static override CONSTRUCTOR_ID = -2091549254
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
      name: 'id',
      type: 'InputBotInlineMessageID',
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
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 11,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'media',
      type: 'InputMedia',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 14,
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
      flagIndex: 2,
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

  get id(): any {
    return this.getParamValue<any>('id')
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
}
