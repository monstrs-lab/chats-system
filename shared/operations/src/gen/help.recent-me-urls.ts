import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface HelpRecentMeUrlsValues {
  urls: Array<any>
  chats: Array<any>
  users: Array<any>
}

export class HelpRecentMeUrls extends TLConstructor<HelpRecentMeUrlsValues> {
  static override CONSTRUCTOR_ID: number = 235081943
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'urls',
      type: 'RecentMeUrl',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'chats',
      type: 'Chat',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'users',
      type: 'User',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get urls(): Array<any> {
    return this.getParamValue<Array<any>>('urls')
  }

  get chats(): Array<any> {
    return this.getParamValue<Array<any>>('chats')
  }

  get users(): Array<any> {
    return this.getParamValue<Array<any>>('users')
  }
}
