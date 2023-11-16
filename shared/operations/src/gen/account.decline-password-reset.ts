import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountDeclinePasswordResetValues {}

export class AccountDeclinePasswordReset extends TLMethod<AccountDeclinePasswordResetValues> {
  static override CONSTRUCTOR_ID = 1284770294
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
