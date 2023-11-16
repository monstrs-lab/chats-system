import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountGetAutoDownloadSettingsValues {}

export class AccountGetAutoDownloadSettings extends TLMethod<AccountGetAutoDownloadSettingsValues> {
  static override CONSTRUCTOR_ID = 1457130303
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
