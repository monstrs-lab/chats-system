import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessagesExportedChatInviteReplacedValues {
  invite: any
  newInvite: any
  users: Array<any>
}

export class MessagesExportedChatInviteReplaced extends TLConstructor<MessagesExportedChatInviteReplacedValues> {
  static override CONSTRUCTOR_ID: number = 572915951
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'invite',
      type: 'ExportedChatInvite',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'new_invite',
      type: 'ExportedChatInvite',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
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

  get invite(): any {
    return this.getParamValue<any>('invite')
  }

  get newInvite(): any {
    return this.getParamValue<any>('newInvite')
  }

  get users(): Array<any> {
    return this.getParamValue<Array<any>>('users')
  }
}
