import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountResetNotifySettingsValues {}

export class AccountResetNotifySettings extends TLMethod<AccountResetNotifySettingsValues> {
  static override CONSTRUCTOR_ID = -612493497
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
