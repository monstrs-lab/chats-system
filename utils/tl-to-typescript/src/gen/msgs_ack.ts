import type { TLSchemaParamParsed } from '@chats-system/tl-json-schema-parser'

import { TLConstructor }            from '@chats-system/tl-types'

export class MsgsAck extends TLConstructor {
  static override CONSTRUCTOR_ID: number = 1658238041
  static override PARAMS: Array<TLSchemaParamParsed> = [
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

  constructor(public readonly msg_ids: any) {
    super()
  }
}
