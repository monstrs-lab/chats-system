import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface SendMessageRecordAudioActionValues {}

export class SendMessageRecordAudioAction extends TLConstructor<SendMessageRecordAudioActionValues> {
  static override CONSTRUCTOR_ID: number = -718310409
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
