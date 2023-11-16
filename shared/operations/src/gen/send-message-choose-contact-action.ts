import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface SendMessageChooseContactActionValues {}

export class SendMessageChooseContactAction extends TLConstructor<SendMessageChooseContactActionValues> {
  static override CONSTRUCTOR_ID: number = 1653390447
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
