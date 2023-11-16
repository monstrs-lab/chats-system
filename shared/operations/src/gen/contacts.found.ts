import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ContactsFoundValues {
  myResults: Array<any>
  results: Array<any>
  chats: Array<any>
  users: Array<any>
}

export class ContactsFound extends TLConstructor<ContactsFoundValues> {
  static override CONSTRUCTOR_ID: number = -1290580579
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'my_results',
      type: 'Peer',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'results',
      type: 'Peer',
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

  get myResults(): Array<any> {
    return this.getParamValue<Array<any>>('myResults')
  }

  get results(): Array<any> {
    return this.getParamValue<Array<any>>('results')
  }

  get chats(): Array<any> {
    return this.getParamValue<Array<any>>('chats')
  }

  get users(): Array<any> {
    return this.getParamValue<Array<any>>('users')
  }
}
