import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface TopPeerCategoryChannelsValues {}

export class TopPeerCategoryChannels extends TLConstructor<TopPeerCategoryChannelsValues> {
  static override CONSTRUCTOR_ID: number = 371037736
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
