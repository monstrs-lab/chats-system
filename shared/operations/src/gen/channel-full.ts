import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelFullValues {
  flags: any
  canViewParticipants: boolean
  canSetUsername: boolean
  canSetStickers: boolean
  hiddenPrehistory: boolean
  canSetLocation: boolean
  hasScheduled: boolean
  canViewStats: boolean
  blocked: boolean
  flags2: any
  canDeleteChannel: boolean
  antispam: boolean
  participantsHidden: boolean
  translationsDisabled: boolean
  id: bigint
  about: string
  participantsCount: number
  adminsCount: number
  kickedCount: number
  bannedCount: number
  onlineCount: number
  readInboxMaxId: number
  readOutboxMaxId: number
  unreadCount: number
  chatPhoto: any
  notifySettings: any
  exportedInvite: any
  botInfo: Array<any>
  migratedFromChatId: bigint
  migratedFromMaxId: number
  pinnedMsgId: number
  stickerset: any
  availableMinId: number
  folderId: number
  linkedChatId: bigint
  location: any
  slowmodeSeconds: number
  slowmodeNextSendDate: number
  statsDc: number
  pts: number
  call: any
  ttlPeriod: number
  pendingSuggestions: Array<string>
  groupcallDefaultJoinAs: any
  themeEmoticon: string
  requestsPending: number
  recentRequesters: Array<bigint>
  defaultSendAs: any
  availableReactions: any
}

export class ChannelFull extends TLConstructor<ChannelFullValues> {
  static override CONSTRUCTOR_ID: number = -231385849
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
      name: 'can_view_participants',
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
      name: 'can_set_username',
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
      name: 'can_set_stickers',
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
      name: 'hidden_prehistory',
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
      name: 'can_set_location',
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
      name: 'has_scheduled',
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
      name: 'can_view_stats',
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
      name: 'blocked',
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
      name: 'can_delete_channel',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 2,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'antispam',
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
      name: 'participants_hidden',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 2,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'translations_disabled',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 2,
      flagIndex: 3,
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
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'participants_count',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'admins_count',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'kicked_count',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'banned_count',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'online_count',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 13,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'read_inbox_max_id',
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
      name: 'read_outbox_max_id',
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
      name: 'unread_count',
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
      name: 'chat_photo',
      type: 'Photo',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
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
      name: 'exported_invite',
      type: 'ExportedChatInvite',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 23,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'bot_info',
      type: 'BotInfo',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'migrated_from_chat_id',
      type: 'long',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'migrated_from_max_id',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 4,
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
      flagIndex: 5,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'stickerset',
      type: 'StickerSet',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 8,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'available_min_id',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 9,
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
      name: 'linked_chat_id',
      type: 'long',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 14,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'location',
      type: 'ChannelLocation',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 15,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'slowmode_seconds',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 17,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'slowmode_next_send_date',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 18,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'stats_dc',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 12,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'pts',
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
      name: 'call',
      type: 'InputGroupCall',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 21,
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
      flagIndex: 24,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'pending_suggestions',
      type: 'string',
      isVector: true,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 25,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'groupcall_default_join_as',
      type: 'Peer',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 26,
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
      flagIndex: 27,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'requests_pending',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 28,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'recent_requesters',
      type: 'long',
      isVector: true,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 28,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'default_send_as',
      type: 'Peer',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 29,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'available_reactions',
      type: 'ChatReactions',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 30,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get canViewParticipants(): boolean {
    return this.getParamValue<boolean>('canViewParticipants')
  }

  get canSetUsername(): boolean {
    return this.getParamValue<boolean>('canSetUsername')
  }

  get canSetStickers(): boolean {
    return this.getParamValue<boolean>('canSetStickers')
  }

  get hiddenPrehistory(): boolean {
    return this.getParamValue<boolean>('hiddenPrehistory')
  }

  get canSetLocation(): boolean {
    return this.getParamValue<boolean>('canSetLocation')
  }

  get hasScheduled(): boolean {
    return this.getParamValue<boolean>('hasScheduled')
  }

  get canViewStats(): boolean {
    return this.getParamValue<boolean>('canViewStats')
  }

  get blocked(): boolean {
    return this.getParamValue<boolean>('blocked')
  }

  get flags2(): any {
    return this.getParamValue<any>('flags2')
  }

  get canDeleteChannel(): boolean {
    return this.getParamValue<boolean>('canDeleteChannel')
  }

  get antispam(): boolean {
    return this.getParamValue<boolean>('antispam')
  }

  get participantsHidden(): boolean {
    return this.getParamValue<boolean>('participantsHidden')
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

  get participantsCount(): number {
    return this.getParamValue<number>('participantsCount')
  }

  get adminsCount(): number {
    return this.getParamValue<number>('adminsCount')
  }

  get kickedCount(): number {
    return this.getParamValue<number>('kickedCount')
  }

  get bannedCount(): number {
    return this.getParamValue<number>('bannedCount')
  }

  get onlineCount(): number {
    return this.getParamValue<number>('onlineCount')
  }

  get readInboxMaxId(): number {
    return this.getParamValue<number>('readInboxMaxId')
  }

  get readOutboxMaxId(): number {
    return this.getParamValue<number>('readOutboxMaxId')
  }

  get unreadCount(): number {
    return this.getParamValue<number>('unreadCount')
  }

  get chatPhoto(): any {
    return this.getParamValue<any>('chatPhoto')
  }

  get notifySettings(): any {
    return this.getParamValue<any>('notifySettings')
  }

  get exportedInvite(): any {
    return this.getParamValue<any>('exportedInvite')
  }

  get botInfo(): Array<any> {
    return this.getParamValue<Array<any>>('botInfo')
  }

  get migratedFromChatId(): bigint {
    return this.getParamValue<bigint>('migratedFromChatId')
  }

  get migratedFromMaxId(): number {
    return this.getParamValue<number>('migratedFromMaxId')
  }

  get pinnedMsgId(): number {
    return this.getParamValue<number>('pinnedMsgId')
  }

  get stickerset(): any {
    return this.getParamValue<any>('stickerset')
  }

  get availableMinId(): number {
    return this.getParamValue<number>('availableMinId')
  }

  get folderId(): number {
    return this.getParamValue<number>('folderId')
  }

  get linkedChatId(): bigint {
    return this.getParamValue<bigint>('linkedChatId')
  }

  get location(): any {
    return this.getParamValue<any>('location')
  }

  get slowmodeSeconds(): number {
    return this.getParamValue<number>('slowmodeSeconds')
  }

  get slowmodeNextSendDate(): number {
    return this.getParamValue<number>('slowmodeNextSendDate')
  }

  get statsDc(): number {
    return this.getParamValue<number>('statsDc')
  }

  get pts(): number {
    return this.getParamValue<number>('pts')
  }

  get call(): any {
    return this.getParamValue<any>('call')
  }

  get ttlPeriod(): number {
    return this.getParamValue<number>('ttlPeriod')
  }

  get pendingSuggestions(): Array<string> {
    return this.getParamValue<Array<string>>('pendingSuggestions')
  }

  get groupcallDefaultJoinAs(): any {
    return this.getParamValue<any>('groupcallDefaultJoinAs')
  }

  get themeEmoticon(): string {
    return this.getParamValue<string>('themeEmoticon')
  }

  get requestsPending(): number {
    return this.getParamValue<number>('requestsPending')
  }

  get recentRequesters(): Array<bigint> {
    return this.getParamValue<Array<bigint>>('recentRequesters')
  }

  get defaultSendAs(): any {
    return this.getParamValue<any>('defaultSendAs')
  }

  get availableReactions(): any {
    return this.getParamValue<any>('availableReactions')
  }
}
