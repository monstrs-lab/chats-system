import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageEntityItalicValues {
  offset: number
  length: number
}

export class MessageEntityItalic extends TLConstructor<MessageEntityItalicValues> {
  static override CONSTRUCTOR_ID: number = -2106619040
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'offset',
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
      name: 'length',
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

  get offset(): number {
    return this.getParamValue<number>('offset')
  }

  get length(): number {
    return this.getParamValue<number>('length')
  }
}
