import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface NotifyBroadcastsValues {}

export class NotifyBroadcasts extends TLConstructor<NotifyBroadcastsValues> {
  static override CONSTRUCTOR_ID: number = -703403793
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
