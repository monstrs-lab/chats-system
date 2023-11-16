import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageActionSetChatThemeValues {
  emoticon: string
}

export class MessageActionSetChatTheme extends TLConstructor<MessageActionSetChatThemeValues> {
  static override CONSTRUCTOR_ID: number = -1434950843
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'emoticon',
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

  get emoticon(): string {
    return this.getParamValue<string>('emoticon')
  }
}
