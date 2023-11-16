import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface HelpUserInfoEmptyValues {}

export class HelpUserInfoEmpty extends TLConstructor<HelpUserInfoEmptyValues> {
  static override CONSTRUCTOR_ID: number = -206688531
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
