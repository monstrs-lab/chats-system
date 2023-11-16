import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageActionContactSignUpValues {}

export class MessageActionContactSignUp extends TLConstructor<MessageActionContactSignUpValues> {
  static override CONSTRUCTOR_ID: number = -202219658
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
