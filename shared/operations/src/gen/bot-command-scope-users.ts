import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface BotCommandScopeUsersValues {}

export class BotCommandScopeUsers extends TLConstructor<BotCommandScopeUsersValues> {
  static override CONSTRUCTOR_ID: number = 1011811544
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
