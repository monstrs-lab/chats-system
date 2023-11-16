import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ContactsBlockedSliceValues {
  count: number
  blocked: Array<any>
  chats: Array<any>
  users: Array<any>
}

export class ContactsBlockedSlice extends TLConstructor<ContactsBlockedSliceValues> {
  static override CONSTRUCTOR_ID: number = -513392236
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
      name: 'blocked',
      type: 'PeerBlocked',
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
  ]

  get count(): number {
    return this.getParamValue<number>('count')
  }

  get blocked(): Array<any> {
    return this.getParamValue<Array<any>>('blocked')
  }

  get chats(): Array<any> {
    return this.getParamValue<Array<any>>('chats')
  }

  get users(): Array<any> {
    return this.getParamValue<Array<any>>('users')
  }
}
