import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface BotMenuButtonDefaultValues {}

export class BotMenuButtonDefault extends TLConstructor<BotMenuButtonDefaultValues> {
  static override CONSTRUCTOR_ID: number = 1966318984
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
