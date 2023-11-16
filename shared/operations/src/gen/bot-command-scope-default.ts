import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface BotCommandScopeDefaultValues {}

export class BotCommandScopeDefault extends TLConstructor<BotCommandScopeDefaultValues> {
  static override CONSTRUCTOR_ID: number = 795652779
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
