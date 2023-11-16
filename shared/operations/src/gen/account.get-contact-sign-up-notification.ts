import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountGetContactSignUpNotificationValues {}

export class AccountGetContactSignUpNotification extends TLMethod<AccountGetContactSignUpNotificationValues> {
  static override CONSTRUCTOR_ID = -1626880216
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
