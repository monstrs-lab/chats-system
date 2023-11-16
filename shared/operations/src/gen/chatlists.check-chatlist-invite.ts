import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ChatlistsCheckChatlistInviteValues {
  slug: string
}

export class ChatlistsCheckChatlistInvite extends TLMethod<ChatlistsCheckChatlistInviteValues> {
  static override CONSTRUCTOR_ID = 1103171583
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'slug',
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

  get slug(): string {
    return this.getParamValue<string>('slug')
  }
}
