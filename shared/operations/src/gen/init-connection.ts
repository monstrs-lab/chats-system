import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface InitConnectionValues {
  flags: any
  apiId: number
  deviceModel: string
  systemVersion: string
  appVersion: string
  systemLangCode: string
  langPack: string
  langCode: string
  proxy: any
  params: any
  query: any
}

export class InitConnection extends TLMethod<InitConnectionValues> {
  static override CONSTRUCTOR_ID = -1043505495
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
      name: 'api_id',
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
      name: 'device_model',
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
      name: 'system_version',
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
      name: 'app_version',
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
      name: 'system_lang_code',
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
      name: 'lang_pack',
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
      name: 'lang_code',
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
      name: 'proxy',
      type: 'InputClientProxy',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'params',
      type: 'JSONValue',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'query',
      type: 'X',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get apiId(): number {
    return this.getParamValue<number>('apiId')
  }

  get deviceModel(): string {
    return this.getParamValue<string>('deviceModel')
  }

  get systemVersion(): string {
    return this.getParamValue<string>('systemVersion')
  }

  get appVersion(): string {
    return this.getParamValue<string>('appVersion')
  }

  get systemLangCode(): string {
    return this.getParamValue<string>('systemLangCode')
  }

  get langPack(): string {
    return this.getParamValue<string>('langPack')
  }

  get langCode(): string {
    return this.getParamValue<string>('langCode')
  }

  get proxy(): any {
    return this.getParamValue<any>('proxy')
  }

  get params(): any {
    return this.getParamValue<any>('params')
  }

  get query(): any {
    return this.getParamValue<any>('query')
  }
}
