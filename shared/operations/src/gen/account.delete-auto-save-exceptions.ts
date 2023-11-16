import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountDeleteAutoSaveExceptionsValues {}

export class AccountDeleteAutoSaveExceptions extends TLMethod<AccountDeleteAutoSaveExceptionsValues> {
  static override CONSTRUCTOR_ID = 1404829728
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
