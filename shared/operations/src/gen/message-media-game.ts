import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageMediaGameValues {
  game: any
}

export class MessageMediaGame extends TLConstructor<MessageMediaGameValues> {
  static override CONSTRUCTOR_ID: number = -38694904
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'game',
      type: 'Game',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get game(): any {
    return this.getParamValue<any>('game')
  }
}
