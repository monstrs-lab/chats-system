import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountGetAuthorizationsValues {}

export class AccountGetAuthorizations extends TLMethod<AccountGetAuthorizationsValues> {
  static override CONSTRUCTOR_ID = -484392616
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
