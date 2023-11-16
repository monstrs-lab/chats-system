import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface TopPeerCategoryPhoneCallsValues {}

export class TopPeerCategoryPhoneCalls extends TLConstructor<TopPeerCategoryPhoneCallsValues> {
  static override CONSTRUCTOR_ID: number = 511092620
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
