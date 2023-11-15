import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

export class MsgsAck extends TLConstructor {
  static override CONSTRUCTOR_ID: number = 1658238041
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'msg_ids',
      type: 'long',
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  constructor(public readonly msgIds: Array<bigint>) {
    super()
  }
}
