import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageActionChatEditTitleValues {
  title: string
}

export class MessageActionChatEditTitle extends TLConstructor<MessageActionChatEditTitleValues> {
  static override CONSTRUCTOR_ID: number = -1247687078
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'title',
      type: 'string',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get title(): string {
    return this.getParamValue<string>('title')
  }
}
