import type { TLSchemaParamParsed } from '@chats-system/tl-json-schema-parser'

import { TLConstructor }            from '@chats-system/tl-types'

export class Vector extends TLConstructor {
  static override CONSTRUCTOR_ID: number = 481674261
  static override PARAMS: Array<TLSchemaParamParsed> = []
}
