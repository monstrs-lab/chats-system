import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesSetInlineBotResultsValues {
  flags: any
  gallery: boolean
  private: boolean
  queryId: bigint
  results: Array<any>
  cacheTime: number
  nextOffset: string
  switchPm: any
  switchWebview: any
}

export class MessagesSetInlineBotResults extends TLMethod<MessagesSetInlineBotResultsValues> {
  static override CONSTRUCTOR_ID = -1156406247
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
      name: 'gallery',
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
      name: 'private',
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
      name: 'results',
      type: 'InputBotInlineResult',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'cache_time',
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
      name: 'next_offset',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'switch_pm',
      type: 'InlineBotSwitchPM',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'switch_webview',
      type: 'InlineBotWebView',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get gallery(): boolean {
    return this.getParamValue<boolean>('gallery')
  }

  get private(): boolean {
    return this.getParamValue<boolean>('private')
  }

  get queryId(): bigint {
    return this.getParamValue<bigint>('queryId')
  }

  get results(): Array<any> {
    return this.getParamValue<Array<any>>('results')
  }

  get cacheTime(): number {
    return this.getParamValue<number>('cacheTime')
  }

  get nextOffset(): string {
    return this.getParamValue<string>('nextOffset')
  }

  get switchPm(): any {
    return this.getParamValue<any>('switchPm')
  }

  get switchWebview(): any {
    return this.getParamValue<any>('switchWebview')
  }
}
