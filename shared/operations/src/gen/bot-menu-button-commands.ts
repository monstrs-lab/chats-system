import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface BotMenuButtonCommandsValues {}

export class BotMenuButtonCommands extends TLConstructor<BotMenuButtonCommandsValues> {
  static override CONSTRUCTOR_ID: number = 1113113093
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
