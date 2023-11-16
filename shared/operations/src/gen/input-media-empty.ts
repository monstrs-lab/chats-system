import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputMediaEmptyValues {}

export class InputMediaEmpty extends TLConstructor<InputMediaEmptyValues> {
  static override CONSTRUCTOR_ID: number = -1771768449
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
