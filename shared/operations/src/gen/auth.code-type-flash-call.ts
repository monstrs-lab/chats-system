import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AuthCodeTypeFlashCallValues {}

export class AuthCodeTypeFlashCall extends TLConstructor<AuthCodeTypeFlashCallValues> {
  static override CONSTRUCTOR_ID: number = 577556219
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
