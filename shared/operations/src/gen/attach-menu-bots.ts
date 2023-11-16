import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AttachMenuBotsValues {
  hash: bigint
  bots: Array<any>
  users: Array<any>
}

export class AttachMenuBots extends TLConstructor<AttachMenuBotsValues> {
  static override CONSTRUCTOR_ID: number = 1011024320
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'hash',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'bots',
      type: 'AttachMenuBot',
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

  get hash(): bigint {
    return this.getParamValue<bigint>('hash')
  }

  get bots(): Array<any> {
    return this.getParamValue<Array<any>>('bots')
  }

  get users(): Array<any> {
    return this.getParamValue<Array<any>>('users')
  }
}
