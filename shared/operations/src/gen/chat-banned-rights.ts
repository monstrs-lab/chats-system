import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChatBannedRightsValues {
  flags: any
  viewMessages: boolean
  sendMessages: boolean
  sendMedia: boolean
  sendStickers: boolean
  sendGifs: boolean
  sendGames: boolean
  sendInline: boolean
  embedLinks: boolean
  sendPolls: boolean
  changeInfo: boolean
  inviteUsers: boolean
  pinMessages: boolean
  manageTopics: boolean
  sendPhotos: boolean
  sendVideos: boolean
  sendRoundvideos: boolean
  sendAudios: boolean
  sendVoices: boolean
  sendDocs: boolean
  sendPlain: boolean
  untilDate: number
}

export class ChatBannedRights extends TLConstructor<ChatBannedRightsValues> {
  static override CONSTRUCTOR_ID: number = -1626209256
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'flags',
      type: '#',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: true,
      useVectorId: false,
    },
    {
      name: 'view_messages',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'send_messages',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'send_media',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'send_stickers',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'send_gifs',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'send_games',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 5,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'send_inline',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 6,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'embed_links',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 7,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'send_polls',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 8,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'change_info',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 10,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'invite_users',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 15,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'pin_messages',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 17,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'manage_topics',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 18,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'send_photos',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 19,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'send_videos',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 20,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'send_roundvideos',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 21,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'send_audios',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 22,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'send_voices',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 23,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'send_docs',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 24,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'send_plain',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 25,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'until_date',
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

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get viewMessages(): boolean {
    return this.getParamValue<boolean>('viewMessages')
  }

  get sendMessages(): boolean {
    return this.getParamValue<boolean>('sendMessages')
  }

  get sendMedia(): boolean {
    return this.getParamValue<boolean>('sendMedia')
  }

  get sendStickers(): boolean {
    return this.getParamValue<boolean>('sendStickers')
  }

  get sendGifs(): boolean {
    return this.getParamValue<boolean>('sendGifs')
  }

  get sendGames(): boolean {
    return this.getParamValue<boolean>('sendGames')
  }

  get sendInline(): boolean {
    return this.getParamValue<boolean>('sendInline')
  }

  get embedLinks(): boolean {
    return this.getParamValue<boolean>('embedLinks')
  }

  get sendPolls(): boolean {
    return this.getParamValue<boolean>('sendPolls')
  }

  get changeInfo(): boolean {
    return this.getParamValue<boolean>('changeInfo')
  }

  get inviteUsers(): boolean {
    return this.getParamValue<boolean>('inviteUsers')
  }

  get pinMessages(): boolean {
    return this.getParamValue<boolean>('pinMessages')
  }

  get manageTopics(): boolean {
    return this.getParamValue<boolean>('manageTopics')
  }

  get sendPhotos(): boolean {
    return this.getParamValue<boolean>('sendPhotos')
  }

  get sendVideos(): boolean {
    return this.getParamValue<boolean>('sendVideos')
  }

  get sendRoundvideos(): boolean {
    return this.getParamValue<boolean>('sendRoundvideos')
  }

  get sendAudios(): boolean {
    return this.getParamValue<boolean>('sendAudios')
  }

  get sendVoices(): boolean {
    return this.getParamValue<boolean>('sendVoices')
  }

  get sendDocs(): boolean {
    return this.getParamValue<boolean>('sendDocs')
  }

  get sendPlain(): boolean {
    return this.getParamValue<boolean>('sendPlain')
  }

  get untilDate(): number {
    return this.getParamValue<number>('untilDate')
  }
}
