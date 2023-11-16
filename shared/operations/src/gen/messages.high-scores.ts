import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessagesHighScoresValues {
  scores: Array<any>
  users: Array<any>
}

export class MessagesHighScores extends TLConstructor<MessagesHighScoresValues> {
  static override CONSTRUCTOR_ID: number = -1707344487
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'scores',
      type: 'HighScore',
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

  get scores(): Array<any> {
    return this.getParamValue<Array<any>>('scores')
  }

  get users(): Array<any> {
    return this.getParamValue<Array<any>>('users')
  }
}
