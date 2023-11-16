import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputMessagesFilterGeoValues {}

export class InputMessagesFilterGeo extends TLConstructor<InputMessagesFilterGeoValues> {
  static override CONSTRUCTOR_ID: number = -419271411
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
