import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessagesExportedChatInvitesValues {
  count: number
  invites: Array<any>
  users: Array<any>
}

export class MessagesExportedChatInvites extends TLConstructor<MessagesExportedChatInvitesValues> {
  static override CONSTRUCTOR_ID: number = -1111085620
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'count',
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
      name: 'invites',
      type: 'ExportedChatInvite',
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

  get count(): number {
    return this.getParamValue<number>('count')
  }

  get invites(): Array<any> {
    return this.getParamValue<Array<any>>('invites')
  }

  get users(): Array<any> {
    return this.getParamValue<Array<any>>('users')
  }
}
