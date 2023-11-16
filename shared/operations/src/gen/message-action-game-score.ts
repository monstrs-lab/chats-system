import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageActionGameScoreValues {
  gameId: bigint
  score: number
}

export class MessageActionGameScore extends TLConstructor<MessageActionGameScoreValues> {
  static override CONSTRUCTOR_ID: number = -1834538890
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'game_id',
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
      name: 'score',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get gameId(): bigint {
    return this.getParamValue<bigint>('gameId')
  }

  get score(): number {
    return this.getParamValue<number>('score')
  }
}
