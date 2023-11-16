import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PhoneCallDiscardReasonBusyValues {}

export class PhoneCallDiscardReasonBusy extends TLConstructor<PhoneCallDiscardReasonBusyValues> {
  static override CONSTRUCTOR_ID: number = -84416311
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
