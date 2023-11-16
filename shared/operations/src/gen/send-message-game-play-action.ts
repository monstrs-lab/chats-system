import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface SendMessageGamePlayActionValues {}

export class SendMessageGamePlayAction extends TLConstructor<SendMessageGamePlayActionValues> {
  static override CONSTRUCTOR_ID: number = -580219064
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
