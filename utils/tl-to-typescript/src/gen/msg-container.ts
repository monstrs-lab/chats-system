import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

export class MsgContainer extends TLConstructor {
  static override CONSTRUCTOR_ID: number = 1945237724
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'messages',
      type: 'Message',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  constructor(public readonly messages: Array<any>) {
    super()
  }
}
