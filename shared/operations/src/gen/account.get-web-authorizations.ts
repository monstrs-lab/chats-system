import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountGetWebAuthorizationsValues {}

export class AccountGetWebAuthorizations extends TLMethod<AccountGetWebAuthorizationsValues> {
  static override CONSTRUCTOR_ID = 405695855
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
