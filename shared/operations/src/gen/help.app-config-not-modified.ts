import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface HelpAppConfigNotModifiedValues {}

export class HelpAppConfigNotModified extends TLConstructor<HelpAppConfigNotModifiedValues> {
  static override CONSTRUCTOR_ID: number = 2094949405
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
