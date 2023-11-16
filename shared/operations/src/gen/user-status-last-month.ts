import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UserStatusLastMonthValues {}

export class UserStatusLastMonth extends TLConstructor<UserStatusLastMonthValues> {
  static override CONSTRUCTOR_ID: number = 2011940674
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
