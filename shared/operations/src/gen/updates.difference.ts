import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdatesDifferenceValues {
  newMessages: Array<any>
  newEncryptedMessages: Array<any>
  otherUpdates: Array<any>
  chats: Array<any>
  users: Array<any>
  state: any
}

export class UpdatesDifference extends TLConstructor<UpdatesDifferenceValues> {
  static override CONSTRUCTOR_ID: number = 16030880
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'new_messages',
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
      name: 'new_encrypted_messages',
      type: 'EncryptedMessage',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'other_updates',
      type: 'Update',
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

  get newMessages(): Array<any> {
    return this.getParamValue<Array<any>>('newMessages')
  }

  get newEncryptedMessages(): Array<any> {
    return this.getParamValue<Array<any>>('newEncryptedMessages')
  }

  get otherUpdates(): Array<any> {
    return this.getParamValue<Array<any>>('otherUpdates')
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
