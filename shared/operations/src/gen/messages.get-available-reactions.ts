import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesGetAvailableReactionsValues {
  hash: number
}

export class MessagesGetAvailableReactions extends TLMethod<MessagesGetAvailableReactionsValues> {
  static override CONSTRUCTOR_ID = 417243308
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'hash',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get hash(): number {
    return this.getParamValue<number>('hash')
  }
}
