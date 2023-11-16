import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChatReactionsSomeValues {
  reactions: Array<any>
}

export class ChatReactionsSome extends TLConstructor<ChatReactionsSomeValues> {
  static override CONSTRUCTOR_ID: number = 1713193015
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'reactions',
      type: 'Reaction',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get reactions(): Array<any> {
    return this.getParamValue<Array<any>>('reactions')
  }
}
