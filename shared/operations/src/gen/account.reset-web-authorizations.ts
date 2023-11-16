import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountResetWebAuthorizationsValues {}

export class AccountResetWebAuthorizations extends TLMethod<AccountResetWebAuthorizationsValues> {
  static override CONSTRUCTOR_ID = 1747789204
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
