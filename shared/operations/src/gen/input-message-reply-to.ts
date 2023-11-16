import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputMessageReplyToValues {
  id: number
}

export class InputMessageReplyTo extends TLConstructor<InputMessageReplyToValues> {
  static override CONSTRUCTOR_ID: number = -1160215659
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
  ]

  get id(): number {
    return this.getParamValue<number>('id')
  }
}
