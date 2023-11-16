import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PageBlockUnsupportedValues {}

export class PageBlockUnsupported extends TLConstructor<PageBlockUnsupportedValues> {
  static override CONSTRUCTOR_ID: number = 324435594
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
