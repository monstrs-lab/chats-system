import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountCancelPasswordEmailValues {}

export class AccountCancelPasswordEmail extends TLMethod<AccountCancelPasswordEmailValues> {
  static override CONSTRUCTOR_ID = -1043606090
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
