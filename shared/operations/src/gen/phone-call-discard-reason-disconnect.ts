import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PhoneCallDiscardReasonDisconnectValues {}

export class PhoneCallDiscardReasonDisconnect extends TLConstructor<PhoneCallDiscardReasonDisconnectValues> {
  static override CONSTRUCTOR_ID: number = -527056480
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
