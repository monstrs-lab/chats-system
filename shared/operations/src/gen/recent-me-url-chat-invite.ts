import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface RecentMeUrlChatInviteValues {
  url: string
  chatInvite: any
}

export class RecentMeUrlChatInvite extends TLConstructor<RecentMeUrlChatInviteValues> {
  static override CONSTRUCTOR_ID: number = -347535331
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'url',
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
      name: 'chat_invite',
      type: 'ChatInvite',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get url(): string {
    return this.getParamValue<string>('url')
  }

  get chatInvite(): any {
    return this.getParamValue<any>('chatInvite')
  }
}
