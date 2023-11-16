import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface BotAppNotModifiedValues {}

export class BotAppNotModified extends TLConstructor<BotAppNotModifiedValues> {
  static override CONSTRUCTOR_ID: number = 1571189943
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
