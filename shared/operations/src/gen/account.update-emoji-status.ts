import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountUpdateEmojiStatusValues {
  emojiStatus: any
}

export class AccountUpdateEmojiStatus extends TLMethod<AccountUpdateEmojiStatusValues> {
  static override CONSTRUCTOR_ID = -70001045
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'emoji_status',
      type: 'EmojiStatus',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get emojiStatus(): any {
    return this.getParamValue<any>('emojiStatus')
  }
}
