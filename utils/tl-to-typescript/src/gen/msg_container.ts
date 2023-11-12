import type { TLSchemaParamParsed } from '@chats-system/tl-json-schema-parser'

import { TLConstructor }            from '@chats-system/tl-types'

export class MsgContainer extends TLConstructor {
  static override CONSTRUCTOR_ID: number = 1945237724
  static override PARAMS: Array<TLSchemaParamParsed> = [
    {
      name: 'messages',
      type: 'vector<%Message>',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  constructor(public readonly messages: any) {
    super()
  }
}
