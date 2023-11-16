import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChatEmptyValues {
  id: bigint
}

export class ChatEmpty extends TLConstructor<ChatEmptyValues> {
  static override CONSTRUCTOR_ID: number = 693512293
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'id',
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

  get id(): bigint {
    return this.getParamValue<bigint>('id')
  }
}
