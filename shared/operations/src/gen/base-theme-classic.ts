import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface BaseThemeClassicValues {}

export class BaseThemeClassic extends TLConstructor<BaseThemeClassicValues> {
  static override CONSTRUCTOR_ID: number = -1012849566
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
