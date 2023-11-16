import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AccountThemesNotModifiedValues {}

export class AccountThemesNotModified extends TLConstructor<AccountThemesNotModifiedValues> {
  static override CONSTRUCTOR_ID: number = -199313886
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
