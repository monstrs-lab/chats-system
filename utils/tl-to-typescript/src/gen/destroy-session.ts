import type { TLSchemaParamParsed } from '@chats-system/tl-json-schema-parser'

import { TLMethod }                 from '@chats-system/tl-types'

export class DestroySession extends TLMethod {
  static override CONSTRUCTOR_ID = -414113498
  static override PARAMS: Array<TLSchemaParamParsed> = [
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

  constructor(public readonly session_id: bigint) {
    super()
  }
}
