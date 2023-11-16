import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ContactsGetTopPeersValues {
  flags: any
  correspondents: boolean
  botsPm: boolean
  botsInline: boolean
  phoneCalls: boolean
  forwardUsers: boolean
  forwardChats: boolean
  groups: boolean
  channels: boolean
  offset: number
  limit: number
  hash: bigint
}

export class ContactsGetTopPeers extends TLMethod<ContactsGetTopPeersValues> {
  static override CONSTRUCTOR_ID = -1758168906
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
      name: 'correspondents',
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
      name: 'bots_pm',
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
      name: 'bots_inline',
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
      name: 'phone_calls',
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
      name: 'forward_users',
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
      name: 'forward_chats',
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
      name: 'groups',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 10,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'channels',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 15,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'offset',
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
      name: 'limit',
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
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get correspondents(): boolean {
    return this.getParamValue<boolean>('correspondents')
  }

  get botsPm(): boolean {
    return this.getParamValue<boolean>('botsPm')
  }

  get botsInline(): boolean {
    return this.getParamValue<boolean>('botsInline')
  }

  get phoneCalls(): boolean {
    return this.getParamValue<boolean>('phoneCalls')
  }

  get forwardUsers(): boolean {
    return this.getParamValue<boolean>('forwardUsers')
  }

  get forwardChats(): boolean {
    return this.getParamValue<boolean>('forwardChats')
  }

  get groups(): boolean {
    return this.getParamValue<boolean>('groups')
  }

  get channels(): boolean {
    return this.getParamValue<boolean>('channels')
  }

  get offset(): number {
    return this.getParamValue<number>('offset')
  }

  get limit(): number {
    return this.getParamValue<number>('limit')
  }

  get hash(): bigint {
    return this.getParamValue<bigint>('hash')
  }
}
