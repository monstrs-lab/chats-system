import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateAutoSaveSettingsValues {}

export class UpdateAutoSaveSettings extends TLConstructor<UpdateAutoSaveSettingsValues> {
  static override CONSTRUCTOR_ID: number = -335171433
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}