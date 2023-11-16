import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PrivacyKeyChatInviteValues {}

export class PrivacyKeyChatInvite extends TLConstructor<PrivacyKeyChatInviteValues> {
  static override CONSTRUCTOR_ID: number = 1343122938
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
