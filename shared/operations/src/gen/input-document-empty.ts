import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputDocumentEmptyValues {}

export class InputDocumentEmpty extends TLConstructor<InputDocumentEmptyValues> {
  static override CONSTRUCTOR_ID: number = 1928391342
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
