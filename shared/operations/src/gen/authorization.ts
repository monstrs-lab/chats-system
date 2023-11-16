import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AuthorizationValues {
  flags: any
  current: boolean
  officialApp: boolean
  passwordPending: boolean
  encryptedRequestsDisabled: boolean
  callRequestsDisabled: boolean
  hash: bigint
  deviceModel: string
  platform: string
  systemVersion: string
  apiId: number
  appName: string
  appVersion: string
  dateCreated: number
  dateActive: number
  ip: string
  country: string
  region: string
}

export class Authorization extends TLConstructor<AuthorizationValues> {
  static override CONSTRUCTOR_ID: number = -1392388579
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
      name: 'current',
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
      name: 'official_app',
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
      name: 'password_pending',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'encrypted_requests_disabled',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'call_requests_disabled',
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
      name: 'hash',
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
      name: 'app_name',
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
      name: 'date_created',
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
      name: 'date_active',
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
      name: 'ip',
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
      name: 'country',
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
      name: 'region',
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

  get current(): boolean {
    return this.getParamValue<boolean>('current')
  }

  get officialApp(): boolean {
    return this.getParamValue<boolean>('officialApp')
  }

  get passwordPending(): boolean {
    return this.getParamValue<boolean>('passwordPending')
  }

  get encryptedRequestsDisabled(): boolean {
    return this.getParamValue<boolean>('encryptedRequestsDisabled')
  }

  get callRequestsDisabled(): boolean {
    return this.getParamValue<boolean>('callRequestsDisabled')
  }

  get hash(): bigint {
    return this.getParamValue<bigint>('hash')
  }

  get deviceModel(): string {
    return this.getParamValue<string>('deviceModel')
  }

  get platform(): string {
    return this.getParamValue<string>('platform')
  }

  get systemVersion(): string {
    return this.getParamValue<string>('systemVersion')
  }

  get apiId(): number {
    return this.getParamValue<number>('apiId')
  }

  get appName(): string {
    return this.getParamValue<string>('appName')
  }

  get appVersion(): string {
    return this.getParamValue<string>('appVersion')
  }

  get dateCreated(): number {
    return this.getParamValue<number>('dateCreated')
  }

  get dateActive(): number {
    return this.getParamValue<number>('dateActive')
  }

  get ip(): string {
    return this.getParamValue<string>('ip')
  }

  get country(): string {
    return this.getParamValue<string>('country')
  }

  get region(): string {
    return this.getParamValue<string>('region')
  }
}
