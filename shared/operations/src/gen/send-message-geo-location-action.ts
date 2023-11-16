import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface SendMessageGeoLocationActionValues {}

export class SendMessageGeoLocationAction extends TLConstructor<SendMessageGeoLocationActionValues> {
  static override CONSTRUCTOR_ID: number = 393186209
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
