import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputChannelEmptyValues {}

export class InputChannelEmpty extends TLConstructor<InputChannelEmptyValues> {
  static override CONSTRUCTOR_ID: number = -292807034
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
