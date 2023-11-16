import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateLoginTokenValues {}

export class UpdateLoginToken extends TLConstructor<UpdateLoginTokenValues> {
  static override CONSTRUCTOR_ID: number = 1448076945
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
