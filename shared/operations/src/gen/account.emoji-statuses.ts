import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AccountEmojiStatusesValues {
  hash: bigint
  statuses: Array<any>
}

export class AccountEmojiStatuses extends TLConstructor<AccountEmojiStatusesValues> {
  static override CONSTRUCTOR_ID: number = -1866176559
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'hash',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'statuses',
      type: 'EmojiStatus',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get hash(): bigint {
    return this.getParamValue<bigint>('hash')
  }

  get statuses(): Array<any> {
    return this.getParamValue<Array<any>>('statuses')
  }
}
