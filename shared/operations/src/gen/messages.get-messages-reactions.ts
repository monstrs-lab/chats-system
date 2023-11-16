import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesGetMessagesReactionsValues {
  peer: any
  id: Array<number>
}

export class MessagesGetMessagesReactions extends TLMethod<MessagesGetMessagesReactionsValues> {
  static override CONSTRUCTOR_ID = -1950707482
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'peer',
      type: 'InputPeer',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'id',
      type: 'int',
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get peer(): any {
    return this.getParamValue<any>('peer')
  }

  get id(): Array<number> {
    return this.getParamValue<Array<number>>('id')
  }
}
