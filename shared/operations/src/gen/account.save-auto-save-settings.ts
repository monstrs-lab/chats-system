import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountSaveAutoSaveSettingsValues {
  flags: any
  users: boolean
  chats: boolean
  broadcasts: boolean
  peer: any
  settings: any
}

export class AccountSaveAutoSaveSettings extends TLMethod<AccountSaveAutoSaveSettingsValues> {
  static override CONSTRUCTOR_ID = -694451359
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
      name: 'users',
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
      name: 'chats',
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
      name: 'broadcasts',
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
      name: 'peer',
      type: 'InputPeer',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'settings',
      type: 'AutoSaveSettings',
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

  get users(): boolean {
    return this.getParamValue<boolean>('users')
  }

  get chats(): boolean {
    return this.getParamValue<boolean>('chats')
  }

  get broadcasts(): boolean {
    return this.getParamValue<boolean>('broadcasts')
  }

  get peer(): any {
    return this.getParamValue<any>('peer')
  }

  get settings(): any {
    return this.getParamValue<any>('settings')
  }
}
