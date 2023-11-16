import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface BaseThemeNightValues {}

export class BaseThemeNight extends TLConstructor<BaseThemeNightValues> {
  static override CONSTRUCTOR_ID: number = -1212997976
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
