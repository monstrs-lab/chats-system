import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageActionCustomActionValues {
  message: string
}

export class MessageActionCustomAction extends TLConstructor<MessageActionCustomActionValues> {
  static override CONSTRUCTOR_ID: number = -85549226
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'message',
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

  get message(): string {
    return this.getParamValue<string>('message')
  }
}
