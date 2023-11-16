import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateMessageIDValues {
  id: number
  randomId: bigint
}

export class UpdateMessageID extends TLConstructor<UpdateMessageIDValues> {
  static override CONSTRUCTOR_ID: number = 1318109142
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'id',
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
      name: 'random_id',
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

  get id(): number {
    return this.getParamValue<number>('id')
  }

  get randomId(): bigint {
    return this.getParamValue<bigint>('randomId')
  }
}
