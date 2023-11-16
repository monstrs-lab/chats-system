import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesRequestSimpleWebViewValues {
  flags: any
  fromSwitchWebview: boolean
  bot: any
  url: string
  themeParams: any
  platform: string
}

export class MessagesRequestSimpleWebView extends TLMethod<MessagesRequestSimpleWebViewValues> {
  static override CONSTRUCTOR_ID = 698084494
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
      name: 'from_switch_webview',
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
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
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
      flagIndex: 0,
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
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get fromSwitchWebview(): boolean {
    return this.getParamValue<boolean>('fromSwitchWebview')
  }

  get bot(): any {
    return this.getParamValue<any>('bot')
  }

  get url(): string {
    return this.getParamValue<string>('url')
  }

  get themeParams(): any {
    return this.getParamValue<any>('themeParams')
  }

  get platform(): string {
    return this.getParamValue<string>('platform')
  }
}
