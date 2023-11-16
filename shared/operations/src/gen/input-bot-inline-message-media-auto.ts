import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputBotInlineMessageMediaAutoValues {
  flags: any
  message: string
  entities: Array<any>
  replyMarkup: any
}

export class InputBotInlineMessageMediaAuto extends TLConstructor<InputBotInlineMessageMediaAutoValues> {
  static override CONSTRUCTOR_ID: number = 864077702
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
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: true,
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
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get message(): string {
    return this.getParamValue<string>('message')
  }

  get entities(): Array<any> {
    return this.getParamValue<Array<any>>('entities')
  }

  get replyMarkup(): any {
    return this.getParamValue<any>('replyMarkup')
  }
}
