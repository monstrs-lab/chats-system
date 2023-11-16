import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ConfigValues {
  flags: any
  defaultP2pContacts: boolean
  preloadFeaturedStickers: boolean
  revokePmInbox: boolean
  blockedMode: boolean
  forceTryIpv6: boolean
  date: number
  expires: number
  testMode: any
  thisDc: number
  dcOptions: Array<any>
  dcTxtDomainName: string
  chatSizeMax: number
  megagroupSizeMax: number
  forwardedCountMax: number
  onlineUpdatePeriodMs: number
  offlineBlurTimeoutMs: number
  offlineIdleTimeoutMs: number
  onlineCloudTimeoutMs: number
  notifyCloudDelayMs: number
  notifyDefaultDelayMs: number
  pushChatPeriodMs: number
  pushChatLimit: number
  editTimeLimit: number
  revokeTimeLimit: number
  revokePmTimeLimit: number
  ratingEDecay: number
  stickersRecentLimit: number
  channelsReadMediaPeriod: number
  tmpSessions: number
  callReceiveTimeoutMs: number
  callRingTimeoutMs: number
  callConnectTimeoutMs: number
  callPacketTimeoutMs: number
  meUrlPrefix: string
  autoupdateUrlPrefix: string
  gifSearchUsername: string
  venueSearchUsername: string
  imgSearchUsername: string
  staticMapsProvider: string
  captionLengthMax: number
  messageLengthMax: number
  webfileDcId: number
  suggestedLangCode: string
  langPackVersion: number
  baseLangPackVersion: number
  reactionsDefault: any
  autologinToken: string
}

export class Config extends TLConstructor<ConfigValues> {
  static override CONSTRUCTOR_ID: number = -870702050
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
      name: 'default_p2p_contacts',
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
      name: 'preload_featured_stickers',
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
      name: 'revoke_pm_inbox',
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
      name: 'blocked_mode',
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
      name: 'force_try_ipv6',
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
      name: 'date',
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
      name: 'expires',
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
      name: 'test_mode',
      type: 'Bool',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'this_dc',
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
      name: 'dc_options',
      type: 'DcOption',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'dc_txt_domain_name',
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
      name: 'chat_size_max',
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
      name: 'megagroup_size_max',
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
      name: 'forwarded_count_max',
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
      name: 'online_update_period_ms',
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
      name: 'offline_blur_timeout_ms',
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
      name: 'offline_idle_timeout_ms',
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
      name: 'online_cloud_timeout_ms',
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
      name: 'notify_cloud_delay_ms',
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
      name: 'notify_default_delay_ms',
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
      name: 'push_chat_period_ms',
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
      name: 'push_chat_limit',
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
      name: 'edit_time_limit',
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
      name: 'revoke_time_limit',
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
      name: 'revoke_pm_time_limit',
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
      name: 'rating_e_decay',
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
      name: 'stickers_recent_limit',
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
      name: 'channels_read_media_period',
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
      name: 'tmp_sessions',
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
      name: 'call_receive_timeout_ms',
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
      name: 'call_ring_timeout_ms',
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
      name: 'call_connect_timeout_ms',
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
      name: 'call_packet_timeout_ms',
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
      name: 'me_url_prefix',
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
      name: 'autoupdate_url_prefix',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 7,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'gif_search_username',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 9,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'venue_search_username',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 10,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'img_search_username',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 11,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'static_maps_provider',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 12,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'caption_length_max',
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
      name: 'message_length_max',
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
      name: 'webfile_dc_id',
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
      name: 'suggested_lang_code',
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
      name: 'lang_pack_version',
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
      name: 'base_lang_pack_version',
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
      name: 'reactions_default',
      type: 'Reaction',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 15,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'autologin_token',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 16,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get defaultP2pContacts(): boolean {
    return this.getParamValue<boolean>('defaultP2pContacts')
  }

  get preloadFeaturedStickers(): boolean {
    return this.getParamValue<boolean>('preloadFeaturedStickers')
  }

  get revokePmInbox(): boolean {
    return this.getParamValue<boolean>('revokePmInbox')
  }

  get blockedMode(): boolean {
    return this.getParamValue<boolean>('blockedMode')
  }

  get forceTryIpv6(): boolean {
    return this.getParamValue<boolean>('forceTryIpv6')
  }

  get date(): number {
    return this.getParamValue<number>('date')
  }

  get expires(): number {
    return this.getParamValue<number>('expires')
  }

  get testMode(): any {
    return this.getParamValue<any>('testMode')
  }

  get thisDc(): number {
    return this.getParamValue<number>('thisDc')
  }

  get dcOptions(): Array<any> {
    return this.getParamValue<Array<any>>('dcOptions')
  }

  get dcTxtDomainName(): string {
    return this.getParamValue<string>('dcTxtDomainName')
  }

  get chatSizeMax(): number {
    return this.getParamValue<number>('chatSizeMax')
  }

  get megagroupSizeMax(): number {
    return this.getParamValue<number>('megagroupSizeMax')
  }

  get forwardedCountMax(): number {
    return this.getParamValue<number>('forwardedCountMax')
  }

  get onlineUpdatePeriodMs(): number {
    return this.getParamValue<number>('onlineUpdatePeriodMs')
  }

  get offlineBlurTimeoutMs(): number {
    return this.getParamValue<number>('offlineBlurTimeoutMs')
  }

  get offlineIdleTimeoutMs(): number {
    return this.getParamValue<number>('offlineIdleTimeoutMs')
  }

  get onlineCloudTimeoutMs(): number {
    return this.getParamValue<number>('onlineCloudTimeoutMs')
  }

  get notifyCloudDelayMs(): number {
    return this.getParamValue<number>('notifyCloudDelayMs')
  }

  get notifyDefaultDelayMs(): number {
    return this.getParamValue<number>('notifyDefaultDelayMs')
  }

  get pushChatPeriodMs(): number {
    return this.getParamValue<number>('pushChatPeriodMs')
  }

  get pushChatLimit(): number {
    return this.getParamValue<number>('pushChatLimit')
  }

  get editTimeLimit(): number {
    return this.getParamValue<number>('editTimeLimit')
  }

  get revokeTimeLimit(): number {
    return this.getParamValue<number>('revokeTimeLimit')
  }

  get revokePmTimeLimit(): number {
    return this.getParamValue<number>('revokePmTimeLimit')
  }

  get ratingEDecay(): number {
    return this.getParamValue<number>('ratingEDecay')
  }

  get stickersRecentLimit(): number {
    return this.getParamValue<number>('stickersRecentLimit')
  }

  get channelsReadMediaPeriod(): number {
    return this.getParamValue<number>('channelsReadMediaPeriod')
  }

  get tmpSessions(): number {
    return this.getParamValue<number>('tmpSessions')
  }

  get callReceiveTimeoutMs(): number {
    return this.getParamValue<number>('callReceiveTimeoutMs')
  }

  get callRingTimeoutMs(): number {
    return this.getParamValue<number>('callRingTimeoutMs')
  }

  get callConnectTimeoutMs(): number {
    return this.getParamValue<number>('callConnectTimeoutMs')
  }

  get callPacketTimeoutMs(): number {
    return this.getParamValue<number>('callPacketTimeoutMs')
  }

  get meUrlPrefix(): string {
    return this.getParamValue<string>('meUrlPrefix')
  }

  get autoupdateUrlPrefix(): string {
    return this.getParamValue<string>('autoupdateUrlPrefix')
  }

  get gifSearchUsername(): string {
    return this.getParamValue<string>('gifSearchUsername')
  }

  get venueSearchUsername(): string {
    return this.getParamValue<string>('venueSearchUsername')
  }

  get imgSearchUsername(): string {
    return this.getParamValue<string>('imgSearchUsername')
  }

  get staticMapsProvider(): string {
    return this.getParamValue<string>('staticMapsProvider')
  }

  get captionLengthMax(): number {
    return this.getParamValue<number>('captionLengthMax')
  }

  get messageLengthMax(): number {
    return this.getParamValue<number>('messageLengthMax')
  }

  get webfileDcId(): number {
    return this.getParamValue<number>('webfileDcId')
  }

  get suggestedLangCode(): string {
    return this.getParamValue<string>('suggestedLangCode')
  }

  get langPackVersion(): number {
    return this.getParamValue<number>('langPackVersion')
  }

  get baseLangPackVersion(): number {
    return this.getParamValue<number>('baseLangPackVersion')
  }

  get reactionsDefault(): any {
    return this.getParamValue<any>('reactionsDefault')
  }

  get autologinToken(): string {
    return this.getParamValue<string>('autologinToken')
  }
}
