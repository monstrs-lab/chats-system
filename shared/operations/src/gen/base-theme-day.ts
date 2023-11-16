import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface BaseThemeDayValues {}

export class BaseThemeDay extends TLConstructor<BaseThemeDayValues> {
  static override CONSTRUCTOR_ID: number = -69724536
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
