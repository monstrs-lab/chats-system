import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountResendPasswordEmailValues {}

export class AccountResendPasswordEmail extends TLMethod<AccountResendPasswordEmailValues> {
  static override CONSTRUCTOR_ID = 2055154197
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
