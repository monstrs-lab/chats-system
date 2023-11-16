import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessagesChatInviteImportersValues {
  count: number
  importers: Array<any>
  users: Array<any>
}

export class MessagesChatInviteImporters extends TLConstructor<MessagesChatInviteImportersValues> {
  static override CONSTRUCTOR_ID: number = -2118733814
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
      name: 'importers',
      type: 'ChatInviteImporter',
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

  get importers(): Array<any> {
    return this.getParamValue<Array<any>>('importers')
  }

  get users(): Array<any> {
    return this.getParamValue<Array<any>>('users')
  }
}
