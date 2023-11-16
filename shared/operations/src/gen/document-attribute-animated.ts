import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface DocumentAttributeAnimatedValues {}

export class DocumentAttributeAnimated extends TLConstructor<DocumentAttributeAnimatedValues> {
  static override CONSTRUCTOR_ID: number = 297109817
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
