import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesRequestAppWebViewValues {
  flags: any
  writeAllowed: boolean
  peer: any
  app: any
  startParam: string
  themeParams: any
  platform: string
}

export class MessagesRequestAppWebView extends TLMethod<MessagesRequestAppWebViewValues> {
  static override CONSTRUCTOR_ID = -1940243652
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
      name: 'write_allowed',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
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
      name: 'app',
      type: 'InputBotApp',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
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
      flagIndex: 1,
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
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get writeAllowed(): boolean {
    return this.getParamValue<boolean>('writeAllowed')
  }

  get peer(): any {
    return this.getParamValue<any>('peer')
  }

  get app(): any {
    return this.getParamValue<any>('app')
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
}
