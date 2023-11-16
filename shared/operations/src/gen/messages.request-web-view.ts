import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesRequestWebViewValues {
  flags: any
  fromBotMenu: boolean
  silent: boolean
  peer: any
  bot: any
  url: string
  startParam: string
  themeParams: any
  platform: string
  replyToMsgId: number
  topMsgId: number
  sendAs: any
}

export class MessagesRequestWebView extends TLMethod<MessagesRequestWebViewValues> {
  static override CONSTRUCTOR_ID = 395003915
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
      name: 'from_bot_menu',
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
      name: 'bot',
      type: 'InputUser',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'url',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'start_param',
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
      name: 'theme_params',
      type: 'DataJSON',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'platform',
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

  get fromBotMenu(): boolean {
    return this.getParamValue<boolean>('fromBotMenu')
  }

  get silent(): boolean {
    return this.getParamValue<boolean>('silent')
  }

  get peer(): any {
    return this.getParamValue<any>('peer')
  }

  get bot(): any {
    return this.getParamValue<any>('bot')
  }

  get url(): string {
    return this.getParamValue<string>('url')
  }

  get startParam(): string {
    return this.getParamValue<string>('startParam')
  }

  get themeParams(): any {
    return this.getParamValue<any>('themeParams')
  }

  get platform(): string {
    return this.getParamValue<string>('platform')
  }

  get replyToMsgId(): number {
    return this.getParamValue<number>('replyToMsgId')
  }

  get topMsgId(): number {
    return this.getParamValue<number>('topMsgId')
  }

  get sendAs(): any {
    return this.getParamValue<any>('sendAs')
  }
}
