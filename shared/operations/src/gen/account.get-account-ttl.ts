import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountGetAccountTTLValues {}

export class AccountGetAccountTTL extends TLMethod<AccountGetAccountTTLValues> {
  static override CONSTRUCTOR_ID = 150761757
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
