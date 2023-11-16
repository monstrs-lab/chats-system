import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface RequestPeerTypeChatValues {
  flags: any
  creator: boolean
  botParticipant: boolean
  hasUsername: any
  forum: any
  userAdminRights: any
  botAdminRights: any
}

export class RequestPeerTypeChat extends TLConstructor<RequestPeerTypeChatValues> {
  static override CONSTRUCTOR_ID: number = -906990053
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
      name: 'creator',
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
      name: 'bot_participant',
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
      name: 'has_username',
      type: 'Bool',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'forum',
      type: 'Bool',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'user_admin_rights',
      type: 'ChatAdminRights',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'bot_admin_rights',
      type: 'ChatAdminRights',
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

  get creator(): boolean {
    return this.getParamValue<boolean>('creator')
  }

  get botParticipant(): boolean {
    return this.getParamValue<boolean>('botParticipant')
  }

  get hasUsername(): any {
    return this.getParamValue<any>('hasUsername')
  }

  get forum(): any {
    return this.getParamValue<any>('forum')
  }

  get userAdminRights(): any {
    return this.getParamValue<any>('userAdminRights')
  }

  get botAdminRights(): any {
    return this.getParamValue<any>('botAdminRights')
  }
}
