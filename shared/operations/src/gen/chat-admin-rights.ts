import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChatAdminRightsValues {
  flags: any
  changeInfo: boolean
  postMessages: boolean
  editMessages: boolean
  deleteMessages: boolean
  banUsers: boolean
  inviteUsers: boolean
  pinMessages: boolean
  addAdmins: boolean
  anonymous: boolean
  manageCall: boolean
  other: boolean
  manageTopics: boolean
}

export class ChatAdminRights extends TLConstructor<ChatAdminRightsValues> {
  static override CONSTRUCTOR_ID: number = 1605510357
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
      name: 'change_info',
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
      name: 'post_messages',
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
      name: 'edit_messages',
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
      name: 'delete_messages',
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
      name: 'ban_users',
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
      name: 'invite_users',
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
      name: 'pin_messages',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 7,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'add_admins',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 9,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'anonymous',
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
      name: 'manage_call',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 11,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'other',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 12,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'manage_topics',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 13,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get changeInfo(): boolean {
    return this.getParamValue<boolean>('changeInfo')
  }

  get postMessages(): boolean {
    return this.getParamValue<boolean>('postMessages')
  }

  get editMessages(): boolean {
    return this.getParamValue<boolean>('editMessages')
  }

  get deleteMessages(): boolean {
    return this.getParamValue<boolean>('deleteMessages')
  }

  get banUsers(): boolean {
    return this.getParamValue<boolean>('banUsers')
  }

  get inviteUsers(): boolean {
    return this.getParamValue<boolean>('inviteUsers')
  }

  get pinMessages(): boolean {
    return this.getParamValue<boolean>('pinMessages')
  }

  get addAdmins(): boolean {
    return this.getParamValue<boolean>('addAdmins')
  }

  get anonymous(): boolean {
    return this.getParamValue<boolean>('anonymous')
  }

  get manageCall(): boolean {
    return this.getParamValue<boolean>('manageCall')
  }

  get other(): boolean {
    return this.getParamValue<boolean>('other')
  }

  get manageTopics(): boolean {
    return this.getParamValue<boolean>('manageTopics')
  }
}
