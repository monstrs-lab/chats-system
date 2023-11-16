import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputNotifyUsersValues {}

export class InputNotifyUsers extends TLConstructor<InputNotifyUsersValues> {
  static override CONSTRUCTOR_ID: number = 423314455
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
