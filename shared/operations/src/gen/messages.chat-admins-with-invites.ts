import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessagesChatAdminsWithInvitesValues {
  admins: Array<any>
  users: Array<any>
}

export class MessagesChatAdminsWithInvites extends TLConstructor<MessagesChatAdminsWithInvitesValues> {
  static override CONSTRUCTOR_ID: number = -1231326505
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'admins',
      type: 'ChatAdminWithInvites',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'users',
      type: 'User',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get admins(): Array<any> {
    return this.getParamValue<Array<any>>('admins')
  }

  get users(): Array<any> {
    return this.getParamValue<Array<any>>('users')
  }
}
