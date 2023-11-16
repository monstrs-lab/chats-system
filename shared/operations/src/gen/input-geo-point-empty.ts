import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputGeoPointEmptyValues {}

export class InputGeoPointEmpty extends TLConstructor<InputGeoPointEmptyValues> {
  static override CONSTRUCTOR_ID: number = -457104426
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
