import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesSetChatAvailableReactionsValues {
  peer: any
  availableReactions: any
}

export class MessagesSetChatAvailableReactions extends TLMethod<MessagesSetChatAvailableReactionsValues> {
  static override CONSTRUCTOR_ID = -21928079
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
      name: 'available_reactions',
      type: 'ChatReactions',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get peer(): any {
    return this.getParamValue<any>('peer')
  }

  get availableReactions(): any {
    return this.getParamValue<any>('availableReactions')
  }
}
