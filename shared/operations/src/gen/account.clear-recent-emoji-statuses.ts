import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountClearRecentEmojiStatusesValues {}

export class AccountClearRecentEmojiStatuses extends TLMethod<AccountClearRecentEmojiStatusesValues> {
  static override CONSTRUCTOR_ID = 404757166
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
