import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountGetContentSettingsValues {}

export class AccountGetContentSettings extends TLMethod<AccountGetContentSettingsValues> {
  static override CONSTRUCTOR_ID = -1952756306
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
