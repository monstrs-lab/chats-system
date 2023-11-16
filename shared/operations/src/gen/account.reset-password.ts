import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountResetPasswordValues {}

export class AccountResetPassword extends TLMethod<AccountResetPasswordValues> {
  static override CONSTRUCTOR_ID = -1828139493
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
