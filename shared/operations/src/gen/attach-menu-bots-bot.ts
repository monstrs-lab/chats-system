import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AttachMenuBotsBotValues {
  bot: any
  users: Array<any>
}

export class AttachMenuBotsBot extends TLConstructor<AttachMenuBotsBotValues> {
  static override CONSTRUCTOR_ID: number = -1816172929
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'bot',
      type: 'AttachMenuBot',
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

  get bot(): any {
    return this.getParamValue<any>('bot')
  }

  get users(): Array<any> {
    return this.getParamValue<Array<any>>('users')
  }
}