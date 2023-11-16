import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesSetEncryptedTypingValues {
  peer: any
  typing: any
}

export class MessagesSetEncryptedTyping extends TLMethod<MessagesSetEncryptedTypingValues> {
  static override CONSTRUCTOR_ID = 2031374829
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'peer',
      type: 'InputEncryptedChat',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'typing',
      type: 'Bool',
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

  get typing(): any {
    return this.getParamValue<any>('typing')
  }
}
