import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UserStatusEmptyValues {}

export class UserStatusEmpty extends TLConstructor<UserStatusEmptyValues> {
  static override CONSTRUCTOR_ID: number = 164646985
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
