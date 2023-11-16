import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountGetAutoSaveSettingsValues {}

export class AccountGetAutoSaveSettings extends TLMethod<AccountGetAutoSaveSettingsValues> {
  static override CONSTRUCTOR_ID = -1379156774
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
