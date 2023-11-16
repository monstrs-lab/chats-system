import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface BaseThemeArcticValues {}

export class BaseThemeArctic extends TLConstructor<BaseThemeArcticValues> {
  static override CONSTRUCTOR_ID: number = 1527845466
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
