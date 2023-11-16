import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UserValues {
  flags: any
  self: boolean
  contact: boolean
  mutualContact: boolean
  deleted: boolean
  bot: boolean
  botChatHistory: boolean
  botNochats: boolean
  verified: boolean
  restricted: boolean
  min: boolean
  botInlineGeo: boolean
  support: boolean
  scam: boolean
  applyMinPhoto: boolean
  fake: boolean
  botAttachMenu: boolean
  premium: boolean
  attachMenuEnabled: boolean
  flags2: any
  botCanEdit: boolean
  id: bigint
  accessHash: bigint
  firstName: string
  lastName: string
  username: string
  phone: string
  photo: any
  status: any
  botInfoVersion: number
  restrictionReason: Array<any>
  botInlinePlaceholder: string
  langCode: string
  emojiStatus: any
  usernames: Array<any>
}

export class User extends TLConstructor<UserValues> {
  static override CONSTRUCTOR_ID: number = -1885878744
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
      name: 'self',
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
      name: 'contact',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 11,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'mutual_contact',
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
      name: 'deleted',
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
      name: 'bot',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 14,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'bot_chat_history',
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
      name: 'bot_nochats',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 16,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'verified',
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
      name: 'restricted',
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
      name: 'min',
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
      name: 'bot_inline_geo',
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
      name: 'support',
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
      name: 'scam',
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
      name: 'apply_min_photo',
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
      name: 'fake',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 26,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'bot_attach_menu',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 27,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'premium',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 28,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'attach_menu_enabled',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 29,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'flags2',
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
      name: 'bot_can_edit',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 2,
      flagIndex: 1,
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
      name: 'access_hash',
      type: 'long',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'first_name',
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
      name: 'last_name',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'username',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'phone',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'photo',
      type: 'UserProfilePhoto',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 5,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'status',
      type: 'UserStatus',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 6,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'bot_info_version',
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
      name: 'restriction_reason',
      type: 'RestrictionReason',
      isVector: true,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 18,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'bot_inline_placeholder',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 19,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'lang_code',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 22,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'emoji_status',
      type: 'EmojiStatus',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 30,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'usernames',
      type: 'Username',
      isVector: true,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 2,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get self(): boolean {
    return this.getParamValue<boolean>('self')
  }

  get contact(): boolean {
    return this.getParamValue<boolean>('contact')
  }

  get mutualContact(): boolean {
    return this.getParamValue<boolean>('mutualContact')
  }

  get deleted(): boolean {
    return this.getParamValue<boolean>('deleted')
  }

  get bot(): boolean {
    return this.getParamValue<boolean>('bot')
  }

  get botChatHistory(): boolean {
    return this.getParamValue<boolean>('botChatHistory')
  }

  get botNochats(): boolean {
    return this.getParamValue<boolean>('botNochats')
  }

  get verified(): boolean {
    return this.getParamValue<boolean>('verified')
  }

  get restricted(): boolean {
    return this.getParamValue<boolean>('restricted')
  }

  get min(): boolean {
    return this.getParamValue<boolean>('min')
  }

  get botInlineGeo(): boolean {
    return this.getParamValue<boolean>('botInlineGeo')
  }

  get support(): boolean {
    return this.getParamValue<boolean>('support')
  }

  get scam(): boolean {
    return this.getParamValue<boolean>('scam')
  }

  get applyMinPhoto(): boolean {
    return this.getParamValue<boolean>('applyMinPhoto')
  }

  get fake(): boolean {
    return this.getParamValue<boolean>('fake')
  }

  get botAttachMenu(): boolean {
    return this.getParamValue<boolean>('botAttachMenu')
  }

  get premium(): boolean {
    return this.getParamValue<boolean>('premium')
  }

  get attachMenuEnabled(): boolean {
    return this.getParamValue<boolean>('attachMenuEnabled')
  }

  get flags2(): any {
    return this.getParamValue<any>('flags2')
  }

  get botCanEdit(): boolean {
    return this.getParamValue<boolean>('botCanEdit')
  }

  get id(): bigint {
    return this.getParamValue<bigint>('id')
  }

  get accessHash(): bigint {
    return this.getParamValue<bigint>('accessHash')
  }

  get firstName(): string {
    return this.getParamValue<string>('firstName')
  }

  get lastName(): string {
    return this.getParamValue<string>('lastName')
  }

  get username(): string {
    return this.getParamValue<string>('username')
  }

  get phone(): string {
    return this.getParamValue<string>('phone')
  }

  get photo(): any {
    return this.getParamValue<any>('photo')
  }

  get status(): any {
    return this.getParamValue<any>('status')
  }

  get botInfoVersion(): number {
    return this.getParamValue<number>('botInfoVersion')
  }

  get restrictionReason(): Array<any> {
    return this.getParamValue<Array<any>>('restrictionReason')
  }

  get botInlinePlaceholder(): string {
    return this.getParamValue<string>('botInlinePlaceholder')
  }

  get langCode(): string {
    return this.getParamValue<string>('langCode')
  }

  get emojiStatus(): any {
    return this.getParamValue<any>('emojiStatus')
  }

  get usernames(): Array<any> {
    return this.getParamValue<Array<any>>('usernames')
  }
}