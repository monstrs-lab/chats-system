import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface HelpDeepLinkInfoEmptyValues {}

export class HelpDeepLinkInfoEmpty extends TLConstructor<HelpDeepLinkInfoEmptyValues> {
  static override CONSTRUCTOR_ID: number = 1722786150
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
