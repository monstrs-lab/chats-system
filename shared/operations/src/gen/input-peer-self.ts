import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputPeerSelfValues {}

export class InputPeerSelf extends TLConstructor<InputPeerSelfValues> {
  static override CONSTRUCTOR_ID: number = 2107670217
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
