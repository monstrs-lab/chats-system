import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UserFullValues {
  flags: any
  blocked: boolean
  phoneCallsAvailable: boolean
  phoneCallsPrivate: boolean
  canPinMessage: boolean
  hasScheduled: boolean
  videoCallsAvailable: boolean
  voiceMessagesForbidden: boolean
  translationsDisabled: boolean
  id: bigint
  about: string
  settings: any
  personalPhoto: any
  profilePhoto: any
  fallbackPhoto: any
  notifySettings: any
  botInfo: any
  pinnedMsgId: number
  commonChatsCount: number
  folderId: number
  ttlPeriod: number
  themeEmoticon: string
  privateForwardName: string
  botGroupAdminRights: any
  botBroadcastAdminRights: any
  premiumGifts: Array<any>
  wallpaper: any
}

export class UserFull extends TLConstructor<UserFullValues> {
  static override CONSTRUCTOR_ID: number = -1813324973
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
      name: 'blocked',
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
      name: 'phone_calls_available',
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
      name: 'phone_calls_private',
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
      name: 'can_pin_message',
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
      name: 'has_scheduled',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 12,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'video_calls_available',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 13,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'voice_messages_forbidden',
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
      name: 'translations_disabled',
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
      name: 'id',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'about',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'settings',
      type: 'PeerSettings',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'personal_photo',
      type: 'Photo',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 21,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'profile_photo',
      type: 'Photo',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'fallback_photo',
      type: 'Photo',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 22,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'notify_settings',
      type: 'PeerNotifySettings',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'bot_info',
      type: 'BotInfo',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'pinned_msg_id',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 6,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'common_chats_count',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'folder_id',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 11,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'ttl_period',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 14,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'theme_emoticon',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 15,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'private_forward_name',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 16,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'bot_group_admin_rights',
      type: 'ChatAdminRights',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 17,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'bot_broadcast_admin_rights',
      type: 'ChatAdminRights',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 18,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'premium_gifts',
      type: 'PremiumGiftOption',
      isVector: true,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 19,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'wallpaper',
      type: 'WallPaper',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 24,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get blocked(): boolean {
    return this.getParamValue<boolean>('blocked')
  }

  get phoneCallsAvailable(): boolean {
    return this.getParamValue<boolean>('phoneCallsAvailable')
  }

  get phoneCallsPrivate(): boolean {
    return this.getParamValue<boolean>('phoneCallsPrivate')
  }

  get canPinMessage(): boolean {
    return this.getParamValue<boolean>('canPinMessage')
  }

  get hasScheduled(): boolean {
    return this.getParamValue<boolean>('hasScheduled')
  }

  get videoCallsAvailable(): boolean {
    return this.getParamValue<boolean>('videoCallsAvailable')
  }

  get voiceMessagesForbidden(): boolean {
    return this.getParamValue<boolean>('voiceMessagesForbidden')
  }

  get translationsDisabled(): boolean {
    return this.getParamValue<boolean>('translationsDisabled')
  }

  get id(): bigint {
    return this.getParamValue<bigint>('id')
  }

  get about(): string {
    return this.getParamValue<string>('about')
  }

  get settings(): any {
    return this.getParamValue<any>('settings')
  }

  get personalPhoto(): any {
    return this.getParamValue<any>('personalPhoto')
  }

  get profilePhoto(): any {
    return this.getParamValue<any>('profilePhoto')
  }

  get fallbackPhoto(): any {
    return this.getParamValue<any>('fallbackPhoto')
  }

  get notifySettings(): any {
    return this.getParamValue<any>('notifySettings')
  }

  get botInfo(): any {
    return this.getParamValue<any>('botInfo')
  }

  get pinnedMsgId(): number {
    return this.getParamValue<number>('pinnedMsgId')
  }

  get commonChatsCount(): number {
    return this.getParamValue<number>('commonChatsCount')
  }

  get folderId(): number {
    return this.getParamValue<number>('folderId')
  }

  get ttlPeriod(): number {
    return this.getParamValue<number>('ttlPeriod')
  }

  get themeEmoticon(): string {
    return this.getParamValue<string>('themeEmoticon')
  }

  get privateForwardName(): string {
    return this.getParamValue<string>('privateForwardName')
  }

  get botGroupAdminRights(): any {
    return this.getParamValue<any>('botGroupAdminRights')
  }

  get botBroadcastAdminRights(): any {
    return this.getParamValue<any>('botBroadcastAdminRights')
  }

  get premiumGifts(): Array<any> {
    return this.getParamValue<Array<any>>('premiumGifts')
  }

  get wallpaper(): any {
    return this.getParamValue<any>('wallpaper')
  }
}
