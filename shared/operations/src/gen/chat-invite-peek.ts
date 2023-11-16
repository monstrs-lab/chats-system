import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChatInvitePeekValues {
  chat: any
  expires: number
}

export class ChatInvitePeek extends TLConstructor<ChatInvitePeekValues> {
  static override CONSTRUCTOR_ID: number = 1634294960
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'chat',
      type: 'Chat',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'expires',
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

  get chat(): any {
    return this.getParamValue<any>('chat')
  }

  get expires(): number {
    return this.getParamValue<number>('expires')
  }
}
