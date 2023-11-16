import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputPhotoEmptyValues {}

export class InputPhotoEmpty extends TLConstructor<InputPhotoEmptyValues> {
  static override CONSTRUCTOR_ID: number = 483901197
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
