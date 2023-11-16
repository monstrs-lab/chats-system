import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface SecureValueTypeBankStatementValues {}

export class SecureValueTypeBankStatement extends TLConstructor<SecureValueTypeBankStatementValues> {
  static override CONSTRUCTOR_ID: number = -1995211763
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
