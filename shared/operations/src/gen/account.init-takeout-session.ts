import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountInitTakeoutSessionValues {
  flags: any
  contacts: boolean
  messageUsers: boolean
  messageChats: boolean
  messageMegagroups: boolean
  messageChannels: boolean
  files: boolean
  fileMaxSize: bigint
}

export class AccountInitTakeoutSession extends TLMethod<AccountInitTakeoutSessionValues> {
  static override CONSTRUCTOR_ID = -1896617296
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
      name: 'contacts',
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
      name: 'message_users',
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
      name: 'message_chats',
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
      name: 'message_megagroups',
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
      name: 'message_channels',
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
      name: 'files',
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
      name: 'file_max_size',
      type: 'long',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 5,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get contacts(): boolean {
    return this.getParamValue<boolean>('contacts')
  }

  get messageUsers(): boolean {
    return this.getParamValue<boolean>('messageUsers')
  }

  get messageChats(): boolean {
    return this.getParamValue<boolean>('messageChats')
  }

  get messageMegagroups(): boolean {
    return this.getParamValue<boolean>('messageMegagroups')
  }

  get messageChannels(): boolean {
    return this.getParamValue<boolean>('messageChannels')
  }

  get files(): boolean {
    return this.getParamValue<boolean>('files')
  }

  get fileMaxSize(): bigint {
    return this.getParamValue<bigint>('fileMaxSize')
  }
}
