import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PhoneCallDiscardReasonMissedValues {}

export class PhoneCallDiscardReasonMissed extends TLConstructor<PhoneCallDiscardReasonMissedValues> {
  static override CONSTRUCTOR_ID: number = -2048646399
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
