// @generated by protoc-gen-interfaces 0.0.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/help/v1alpha1/help.service.proto (package tech.monstrs.chats_system.help.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * @generated from message tech.monstrs.chats_system.help.v1alpha1.CountryCode
 */
export interface CountryCode {
  /**
   * @generated from field: string country_code = 1;
   */
  countryCode: string

  /**
   * @generated from field: repeated string prefixes = 2;
   */
  prefixes: string[]

  /**
   * @generated from field: repeated string patterns = 3;
   */
  patterns: string[]
}

/**
 * @generated from message tech.monstrs.chats_system.help.v1alpha1.Country
 */
export interface Country {
  /**
   * @generated from field: string iso2 = 1;
   */
  iso2: string

  /**
   * @generated from field: string default_name = 2;
   */
  defaultName: string

  /**
   * @generated from field: repeated tech.monstrs.chats_system.help.v1alpha1.CountryCode country_codes = 3;
   */
  countryCodes: CountryCode[]

  /**
   * @generated from field: optional string name = 4;
   */
  name?: string

  /**
   * @generated from field: optional bool hidden = 5;
   */
  hidden?: boolean
}

/**
 * @generated from message tech.monstrs.chats_system.help.v1alpha1.NearestDc
 */
export interface NearestDc {
  /**
   * @generated from field: string country = 1;
   */
  country: string

  /**
   * @generated from field: int32 this_dc = 2;
   */
  thisDc: number

  /**
   * @generated from field: int32 nearest_dc = 3;
   */
  nearestDc: number
}

/**
 * @generated from message tech.monstrs.chats_system.help.v1alpha1.DcOption
 */
export interface DcOption {
  /**
   * @generated from field: int32 id = 1;
   */
  id: number

  /**
   * @generated from field: string ipAddress = 2;
   */
  ipAddress: string

  /**
   * @generated from field: int32 port = 3;
   */
  port: number

  /**
   * @generated from field: optional bool ipv6 = 4;
   */
  ipv6?: boolean

  /**
   * @generated from field: optional bool mediaOnly = 5;
   */
  mediaOnly?: boolean

  /**
   * @generated from field: optional bool tcpoOnly = 6;
   */
  tcpoOnly?: boolean

  /**
   * @generated from field: optional bool cdn = 7;
   */
  cdn?: boolean

  /**
   * @generated from field: optional bool static = 8;
   */
  static?: boolean

  /**
   * @generated from field: optional bool thisPortOnly = 9;
   */
  thisPortOnly?: boolean

  /**
   * @generated from field: optional bytes secret = 10;
   */
  secret?: Uint8Array
}

/**
 * @generated from message tech.monstrs.chats_system.help.v1alpha1.Reaction
 */
export interface Reaction {}

/**
 * @generated from message tech.monstrs.chats_system.help.v1alpha1.Config
 */
export interface Config {
  /**
   * @generated from field: int32 date = 1;
   */
  date: number

  /**
   * @generated from field: int32 expires = 2;
   */
  expires: number

  /**
   * @generated from field: bool test_mode = 3;
   */
  testMode: boolean

  /**
   * @generated from field: int32 this_dc = 4;
   */
  thisDc: number

  /**
   * @generated from field: repeated tech.monstrs.chats_system.help.v1alpha1.DcOption dc_options = 5;
   */
  dcOptions: DcOption[]

  /**
   * @generated from field: string dc_txt_domain_name = 6;
   */
  dcTxtDomainName: string

  /**
   * @generated from field: int32 chat_size_max = 7;
   */
  chatSizeMax: number

  /**
   * @generated from field: int32 megagroup_size_max = 8;
   */
  megagroupSizeMax: number

  /**
   * @generated from field: int32 forwarded_count_max = 9;
   */
  forwardedCountMax: number

  /**
   * @generated from field: int32 online_update_period_ms = 10;
   */
  onlineUpdatePeriodMs: number

  /**
   * @generated from field: int32 offline_blur_timeout_ms = 11;
   */
  offlineBlurTimeoutMs: number

  /**
   * @generated from field: int32 offline_idle_timeout_ms = 12;
   */
  offlineIdleTimeoutMs: number

  /**
   * @generated from field: int32 online_cloud_timeout_ms = 13;
   */
  onlineCloudTimeoutMs: number

  /**
   * @generated from field: int32 notify_cloud_delay_ms = 14;
   */
  notifyCloudDelayMs: number

  /**
   * @generated from field: int32 notify_default_delay_ms = 15;
   */
  notifyDefaultDelayMs: number

  /**
   * @generated from field: int32 push_chat_period_ms = 16;
   */
  pushChatPeriodMs: number

  /**
   * @generated from field: int32 push_chat_limit = 17;
   */
  pushChatLimit: number

  /**
   * @generated from field: int32 edit_time_limit = 18;
   */
  editTimeLimit: number

  /**
   * @generated from field: int32 revoke_time_limit = 19;
   */
  revokeTimeLimit: number

  /**
   * @generated from field: int32 revoke_pm_time_limit = 20;
   */
  revokePmTimeLimit: number

  /**
   * @generated from field: int32 rating_e_decay = 21;
   */
  ratingEDecay: number

  /**
   * @generated from field: int32 stickers_recent_limit = 22;
   */
  stickersRecentLimit: number

  /**
   * @generated from field: int32 channels_read_media_period = 23;
   */
  channelsReadMediaPeriod: number

  /**
   * @generated from field: int32 call_receive_timeout_ms = 24;
   */
  callReceiveTimeoutMs: number

  /**
   * @generated from field: int32 call_ring_timeout_ms = 25;
   */
  callRingTimeoutMs: number

  /**
   * @generated from field: int32 call_connect_timeout_ms = 26;
   */
  callConnectTimeoutMs: number

  /**
   * @generated from field: int32 call_packet_timeout_ms = 27;
   */
  callPacketTimeoutMs: number

  /**
   * @generated from field: string me_url_prefix = 28;
   */
  meUrlPrefix: string

  /**
   * @generated from field: int32 caption_length_max = 29;
   */
  captionLengthMax: number

  /**
   * @generated from field: int32 message_length_max = 30;
   */
  messageLengthMax: number

  /**
   * @generated from field: int32 webfile_dc_id = 31;
   */
  webfileDcId: number

  /**
   * @generated from field: int32 tmp_sessions = 32;
   */
  tmpSessions: number

  /**
   * @generated from field: optional bool default_p2p_contacts = 33;
   */
  defaultP2pContacts?: boolean

  /**
   * @generated from field: optional bool preload_featured_stickers = 34;
   */
  preloadFeaturedStickers?: boolean

  /**
   * @generated from field: optional bool revoke_pm_inbox = 35;
   */
  revokePmInbox?: boolean

  /**
   * @generated from field: optional bool blocked_mode = 36;
   */
  blockedMode?: boolean

  /**
   * @generated from field: optional string gif_search_username = 37;
   */
  gifSearchUsername?: string

  /**
   * @generated from field: optional string venue_search_username = 38;
   */
  venueSearchUsername?: string

  /**
   * @generated from field: optional string img_search_username = 39;
   */
  imgSearchUsername?: string

  /**
   * @generated from field: optional string static_maps_provider = 40;
   */
  staticMapsProvider?: string

  /**
   * @generated from field: optional string suggested_lang_code = 41;
   */
  suggestedLangCode?: string

  /**
   * @generated from field: optional int32 lang_pack_version = 42;
   */
  langPackVersion?: number

  /**
   * @generated from field: optional int32 base_lang_pack_version = 43;
   */
  baseLangPackVersion?: number

  /**
   * @generated from field: optional bool force_try_ipv6 = 44;
   */
  forceTryIpv6?: boolean

  /**
   * @generated from field: optional string autoupdate_url_prefix = 45;
   */
  autoupdateUrlPrefix?: string

  /**
   * @generated from field: optional string autologin_token = 46;
   */
  autologinToken?: string

  /**
   * @generated from field: optional tech.monstrs.chats_system.help.v1alpha1.Reaction reactions_default = 47;
   */
  reactionsDefault?: Reaction
}

/**
 * @generated from message tech.monstrs.chats_system.help.v1alpha1.GetConfigRequest
 */
export interface GetConfigRequest {}

/**
 * @generated from message tech.monstrs.chats_system.help.v1alpha1.GetConfigResponse
 */
export interface GetConfigResponse {
  /**
   * @generated from field: tech.monstrs.chats_system.help.v1alpha1.Config config = 1;
   */
  config?: Config
}

/**
 * @generated from message tech.monstrs.chats_system.help.v1alpha1.GetNearestDcRequest
 */
export interface GetNearestDcRequest {}

/**
 * @generated from message tech.monstrs.chats_system.help.v1alpha1.GetNearestDcResponse
 */
export interface GetNearestDcResponse {
  /**
   * @generated from field: tech.monstrs.chats_system.help.v1alpha1.NearestDc nearest_dc = 1;
   */
  nearestDc?: NearestDc
}

/**
 * @generated from message tech.monstrs.chats_system.help.v1alpha1.GetCountriesListRequest
 */
export interface GetCountriesListRequest {
  /**
   * @generated from field: string lang_code = 1;
   */
  langCode: string

  /**
   * @generated from field: int32 hash = 2;
   */
  hash: number
}

/**
 * @generated from message tech.monstrs.chats_system.help.v1alpha1.GetCountriesListResponse
 */
export interface GetCountriesListResponse {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.help.v1alpha1.Country countries = 1;
   */
  countries: Country[]

  /**
   * @generated from field: int32 hash = 2;
   */
  hash: number
}