import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputUserEmptyValues {}

export class InputUserEmpty extends TLConstructor<InputUserEmptyValues> {
  static override CONSTRUCTOR_ID: number = -1182234929
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
