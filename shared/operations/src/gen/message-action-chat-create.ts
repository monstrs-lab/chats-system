import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageActionChatCreateValues {
  title: string
  users: Array<bigint>
}

export class MessageActionChatCreate extends TLConstructor<MessageActionChatCreateValues> {
  static override CONSTRUCTOR_ID: number = -1119368275
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
    {
      name: 'users',
      type: 'long',
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get title(): string {
    return this.getParamValue<string>('title')
  }

  get users(): Array<bigint> {
    return this.getParamValue<Array<bigint>>('users')
  }
}
