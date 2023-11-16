import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface TopPeerCategoryGroupsValues {}

export class TopPeerCategoryGroups extends TLConstructor<TopPeerCategoryGroupsValues> {
  static override CONSTRUCTOR_ID: number = -1122524854
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
