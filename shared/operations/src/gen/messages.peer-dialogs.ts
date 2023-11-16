import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessagesPeerDialogsValues {
  dialogs: Array<any>
  messages: Array<any>
  chats: Array<any>
  users: Array<any>
  state: any
}

export class MessagesPeerDialogs extends TLConstructor<MessagesPeerDialogsValues> {
  static override CONSTRUCTOR_ID: number = 863093588
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'dialogs',
      type: 'Dialog',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'messages',
      type: 'Message',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'chats',
      type: 'Chat',
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
    {
      name: 'state',
      type: 'updates.State',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get dialogs(): Array<any> {
    return this.getParamValue<Array<any>>('dialogs')
  }

  get messages(): Array<any> {
    return this.getParamValue<Array<any>>('messages')
  }

  get chats(): Array<any> {
    return this.getParamValue<Array<any>>('chats')
  }

  get users(): Array<any> {
    return this.getParamValue<Array<any>>('users')
  }

  get state(): any {
    return this.getParamValue<any>('state')
  }
}
