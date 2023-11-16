import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PageBlockDividerValues {}

export class PageBlockDivider extends TLConstructor<PageBlockDividerValues> {
  static override CONSTRUCTOR_ID: number = -618614392
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
