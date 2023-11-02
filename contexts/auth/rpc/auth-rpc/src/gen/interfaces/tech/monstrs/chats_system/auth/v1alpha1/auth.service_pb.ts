// @generated by protoc-gen-interfaces 0.0.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/auth/v1alpha1/auth.service.proto (package tech.monstrs.chats_system.auth.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { AuthKeyInfo } from '../../core/v1alpha1/schema.tl.sync_pb.js'
import type { FutureSalt }  from '../../core/v1alpha1/schema.tl.transport_pb.js'

/**
 * @generated from enum tech.monstrs.chats_system.auth.v1alpha1.TLConstructor
 */
export enum TLConstructor {
  /**
   * @generated from enum value: CRC32_UNKNOWN = 0;
   */
  CRC32_UNKNOWN = 0,

  /**
   * @generated from enum value: CRC32_clientSession = -1701940816;
   */
  CRC32_clientSession = -1701940816,

  /**
   * @generated from enum value: CRC32_authKeyStateData = -646863312;
   */
  CRC32_authKeyStateData = -646863312,

  /**
   * @generated from enum value: CRC32_authsession_getAuthorizations = 820122180;
   */
  CRC32_authsession_getAuthorizations = 820122180,

  /**
   * @generated from enum value: CRC32_authsession_resetAuthorization = -1923126106;
   */
  CRC32_authsession_resetAuthorization = -1923126106,

  /**
   * @generated from enum value: CRC32_authsession_getLayer = -1473309015;
   */
  CRC32_authsession_getLayer = -1473309015,

  /**
   * @generated from enum value: CRC32_authsession_getLangPack = 700170598;
   */
  CRC32_authsession_getLangPack = 700170598,

  /**
   * @generated from enum value: CRC32_authsession_getClient = 1616401854;
   */
  CRC32_authsession_getClient = 1616401854,

  /**
   * @generated from enum value: CRC32_authsession_getLangCode = 1486468441;
   */
  CRC32_authsession_getLangCode = 1486468441,

  /**
   * @generated from enum value: CRC32_authsession_getUserId = 1464409260;
   */
  CRC32_authsession_getUserId = 1464409260,

  /**
   * @generated from enum value: CRC32_authsession_getPushSessionId = -1279119039;
   */
  CRC32_authsession_getPushSessionId = -1279119039,

  /**
   * @generated from enum value: CRC32_authsession_getFutureSalts = -1194371051;
   */
  CRC32_authsession_getFutureSalts = -1194371051,

  /**
   * @generated from enum value: CRC32_authsession_queryAuthKey = 1421293608;
   */
  CRC32_authsession_queryAuthKey = 1421293608,

  /**
   * @generated from enum value: CRC32_authsession_setAuthKey = 1049889937;
   */
  CRC32_authsession_setAuthKey = 1049889937,

  /**
   * @generated from enum value: CRC32_authsession_bindAuthKeyUser = 198050851;
   */
  CRC32_authsession_bindAuthKeyUser = 198050851,

  /**
   * @generated from enum value: CRC32_authsession_unbindAuthKeyUser = 123258440;
   */
  CRC32_authsession_unbindAuthKeyUser = 123258440,

  /**
   * @generated from enum value: CRC32_authsession_getPermAuthKeyId = -1871420202;
   */
  CRC32_authsession_getPermAuthKeyId = -1871420202,

  /**
   * @generated from enum value: CRC32_authsession_bindTempAuthKey = 1620004742;
   */
  CRC32_authsession_bindTempAuthKey = 1620004742,

  /**
   * @generated from enum value: CRC32_authsession_setClientSessionInfo = 47841172;
   */
  CRC32_authsession_setClientSessionInfo = 47841172,

  /**
   * @generated from enum value: CRC32_authsession_getAuthorization = 1851660579;
   */
  CRC32_authsession_getAuthorization = 1851660579,

  /**
   * @generated from enum value: CRC32_authsession_getAuthStateData = 1331573041;
   */
  CRC32_authsession_getAuthStateData = 1331573041,

  /**
   * @generated from enum value: CRC32_authsession_setLayer = 1147475077;
   */
  CRC32_authsession_setLayer = 1147475077,

  /**
   * @generated from enum value: CRC32_authsession_setInitConnection = 2095024780;
   */
  CRC32_authsession_setInitConnection = 2095024780,
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.AuthKeyStateData
 */
export interface AuthKeyStateData {
  /**
   * @generated from field: string predicate_name = 1;
   */
  predicateName: string

  /**
   * @generated from field: tech.monstrs.chats_system.auth.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: int64 auth_key_id = 3;
   */
  authKeyId: bigint

  /**
   * @generated from field: int64 user_id = 4;
   */
  userId: bigint

  /**
   * @generated from field: int32 key_state = 5;
   */
  keyState: number

  /**
   * @generated from field: int32 layer = 6;
   */
  layer: number

  /**
   * @generated from field: int32 client_type = 7;
   */
  clientType: number

  /**
   * @generated from field: int64 android_push_session_id = 8;
   */
  androidPushSessionId: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.TLAuthKeyStateData
 */
export interface TLAuthKeyStateData {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.auth.v1alpha1.AuthKeyStateData data2 = 1;
   */
  data2: AuthKeyStateData[]
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.ClientSession
 */
export interface ClientSession {
  /**
   * @generated from field: string predicate_name = 1;
   */
  predicateName: string

  /**
   * @generated from field: tech.monstrs.chats_system.auth.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: int64 auth_key_id = 3;
   */
  authKeyId: bigint

  /**
   * @generated from field: string ip = 4;
   */
  ip: string

  /**
   * @generated from field: int32 layer = 5;
   */
  layer: number

  /**
   * @generated from field: int32 api_id = 6;
   */
  apiId: number

  /**
   * @generated from field: string device_model = 7;
   */
  deviceModel: string

  /**
   * @generated from field: string system_version = 8;
   */
  systemVersion: string

  /**
   * @generated from field: string app_version = 9;
   */
  appVersion: string

  /**
   * @generated from field: string system_lang_code = 10;
   */
  systemLangCode: string

  /**
   * @generated from field: string lang_pack = 11;
   */
  langPack: string

  /**
   * @generated from field: string lang_code = 12;
   */
  langCode: string

  /**
   * @generated from field: string proxy = 13;
   */
  proxy: string

  /**
   * @generated from field: string params = 14;
   */
  params: string
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.TLClientSession
 */
export interface TLClientSession {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.auth.v1alpha1.ClientSession data2 = 1;
   */
  data2: ClientSession[]
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.TLAuthsessionGetAuthorizations
 */
export interface TLAuthsessionGetAuthorizations {
  /**
   * @generated from field: tech.monstrs.chats_system.auth.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: int64 user_id = 3;
   */
  userId: bigint

  /**
   * @generated from field: int64 exclude_auth_keyId = 4;
   */
  excludeAuthKeyId: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.TLAuthsessionResetAuthorization
 */
export interface TLAuthsessionResetAuthorization {
  /**
   * @generated from field: tech.monstrs.chats_system.auth.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: int64 user_id = 3;
   */
  userId: bigint

  /**
   * @generated from field: int64 auth_key_id = 4;
   */
  authKeyId: bigint

  /**
   * @generated from field: int64 hash = 5;
   */
  hash: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.TLAuthsessionGetLayer
 */
export interface TLAuthsessionGetLayer {
  /**
   * @generated from field: tech.monstrs.chats_system.auth.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: int64 auth_key_id = 3;
   */
  authKeyId: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.TLAuthsessionGetLangPack
 */
export interface TLAuthsessionGetLangPack {
  /**
   * @generated from field: tech.monstrs.chats_system.auth.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: int64 auth_key_id = 3;
   */
  authKeyId: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.TLAuthsessionGetClient
 */
export interface TLAuthsessionGetClient {
  /**
   * @generated from field: tech.monstrs.chats_system.auth.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: int64 auth_key_id = 3;
   */
  authKeyId: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.TLAuthsessionGetLangCode
 */
export interface TLAuthsessionGetLangCode {
  /**
   * @generated from field: tech.monstrs.chats_system.auth.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: int64 auth_key_id = 3;
   */
  authKeyId: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.TLAuthsessionGetUserId
 */
export interface TLAuthsessionGetUserId {
  /**
   * @generated from field: tech.monstrs.chats_system.auth.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: int64 auth_key_id = 3;
   */
  authKeyId: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.TLAuthsessionGetPushSessionId
 */
export interface TLAuthsessionGetPushSessionId {
  /**
   * @generated from field: tech.monstrs.chats_system.auth.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: int64 user_id = 3;
   */
  userId: bigint

  /**
   * @generated from field: int64 auth_key_id = 4;
   */
  authKeyId: bigint

  /**
   * @generated from field: int32 token_type = 5;
   */
  tokenType: number
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.TLAuthsessionGetFutureSalts
 */
export interface TLAuthsessionGetFutureSalts {
  /**
   * @generated from field: tech.monstrs.chats_system.auth.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: int64 auth_key_id = 3;
   */
  authKeyId: bigint

  /**
   * @generated from field: int32 num = 4;
   */
  num: number
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.TLAuthsessionQueryAuthKey
 */
export interface TLAuthsessionQueryAuthKey {
  /**
   * @generated from field: tech.monstrs.chats_system.auth.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: int64 auth_key_id = 3;
   */
  authKeyId: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.TLAuthsessionSetAuthKey
 */
export interface TLAuthsessionSetAuthKey {
  /**
   * @generated from field: tech.monstrs.chats_system.auth.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.AuthKeyInfo auth_key = 3;
   */
  authKey: AuthKeyInfo[]

  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.FutureSalt future_salt = 4;
   */
  futureSalt: FutureSalt[]

  /**
   * @generated from field: int32 expires_in = 5;
   */
  expiresIn: number
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.TLAuthsessionBindAuthKeyUser
 */
export interface TLAuthsessionBindAuthKeyUser {
  /**
   * @generated from field: tech.monstrs.chats_system.auth.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: int64 auth_key_id = 3;
   */
  authKeyId: bigint

  /**
   * @generated from field: int64 user_id = 4;
   */
  userId: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.TLAuthsessionUnbindAuthKeyUser
 */
export interface TLAuthsessionUnbindAuthKeyUser {
  /**
   * @generated from field: tech.monstrs.chats_system.auth.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: int64 auth_key_id = 3;
   */
  authKeyId: bigint

  /**
   * @generated from field: int64 user_id = 4;
   */
  userId: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.TLAuthsessionGetPermAuthKeyId
 */
export interface TLAuthsessionGetPermAuthKeyId {
  /**
   * @generated from field: tech.monstrs.chats_system.auth.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: int64 auth_key_id = 3;
   */
  authKeyId: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.TLAuthsessionBindTempAuthKey
 */
export interface TLAuthsessionBindTempAuthKey {
  /**
   * @generated from field: tech.monstrs.chats_system.auth.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: int64 perm_auth_key_id = 3;
   */
  permAuthKeyId: bigint

  /**
   * @generated from field: int64 nonce = 4;
   */
  nonce: bigint

  /**
   * @generated from field: int32 expires_at = 5;
   */
  expiresAt: number

  /**
   * @generated from field: bytes encrypted_message = 6;
   */
  encryptedMessage: Uint8Array
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.TLAuthsessionSetClientSessionInfo
 */
export interface TLAuthsessionSetClientSessionInfo {
  /**
   * @generated from field: tech.monstrs.chats_system.auth.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: repeated tech.monstrs.chats_system.auth.v1alpha1.ClientSession data = 3;
   */
  data: ClientSession[]
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.TLAuthsessionGetAuthorization
 */
export interface TLAuthsessionGetAuthorization {
  /**
   * @generated from field: tech.monstrs.chats_system.auth.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: int64 auth_key_id = 3;
   */
  authKeyId: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.TLAuthsessionGetAuthStateData
 */
export interface TLAuthsessionGetAuthStateData {
  /**
   * @generated from field: tech.monstrs.chats_system.auth.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: int64 auth_key_id = 3;
   */
  authKeyId: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.TLAuthsessionSetLayer
 */
export interface TLAuthsessionSetLayer {
  /**
   * @generated from field: tech.monstrs.chats_system.auth.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: int64 auth_key_id = 3;
   */
  authKeyId: bigint

  /**
   * @generated from field: string ip = 4;
   */
  ip: string

  /**
   * @generated from field: int32 layer = 5;
   */
  layer: number
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.TLAuthsessionSetInitConnection
 */
export interface TLAuthsessionSetInitConnection {
  /**
   * @generated from field: tech.monstrs.chats_system.auth.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: int64 auth_key_id = 3;
   */
  authKeyId: bigint

  /**
   * @generated from field: string ip = 4;
   */
  ip: string

  /**
   * @generated from field: int32 api_id = 5;
   */
  apiId: number

  /**
   * @generated from field: string device_model = 6;
   */
  deviceModel: string

  /**
   * @generated from field: string system_version = 7;
   */
  systemVersion: string

  /**
   * @generated from field: string app_version = 8;
   */
  appVersion: string

  /**
   * @generated from field: string system_lang_code = 9;
   */
  systemLangCode: string

  /**
   * @generated from field: string lang_pack = 10;
   */
  langPack: string

  /**
   * @generated from field: string lang_code = 11;
   */
  langCode: string

  /**
   * @generated from field: string proxy = 12;
   */
  proxy: string

  /**
   * @generated from field: string params = 13;
   */
  params: string
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.VectorLong
 */
export interface VectorLong {
  /**
   * @generated from field: int64 datas = 1;
   */
  datas: bigint
}
