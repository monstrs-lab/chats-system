import type { TLSchemaParamParsed } from '@chats-system/tl-json-schema-parser'

import { TLConstructor }            from '@chats-system/tl-types'

export class GzipPacked extends TLConstructor {
  static override CONSTRUCTOR_ID: number = 812830625
  static override PARAMS: Array<TLSchemaParamParsed> = [
    {
      name: 'packed_data',
      type: 'bytes',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  constructor(public readonly packed_data: Buffer) {
    super()
  }
}
