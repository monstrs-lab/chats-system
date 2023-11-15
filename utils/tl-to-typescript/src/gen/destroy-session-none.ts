import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

export class DestroySessionNone extends TLConstructor {
  static override CONSTRUCTOR_ID: number = 1658015945
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'session_id',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  constructor(public readonly sessionId: bigint) {
    super()
  }
}
