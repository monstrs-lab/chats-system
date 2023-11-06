// @generated by protoc-gen-interfaces 0.0.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/session/v1alpha1/session.service.proto (package tech.monstrs.chats_system.session.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { AuthKeyInfo }          from '../../core/v1alpha1/schema.tl.sync_pb.js'
import type { Updates } from '../../core/v1alpha1/schema.tl.sync_pb.js'
import type { FutureSalt }           from '../../core/v1alpha1/schema.tl.transport_pb.js'

/**
 * @generated from enum tech.monstrs.chats_system.session.v1alpha1.TLConstructor
 */
export enum TLConstructor {
  /**
   * @generated from enum value: CRC32_UNKNOWN = 0;
   */
  CRC32_UNKNOWN = 0,

  /**
   * @generated from enum value: CRC32_sessionClientEvent = -739769057;
   */
  CRC32_sessionClientEvent = -739769057,

  /**
   * @generated from enum value: CRC32_sessionClientData = 825806990;
   */
  CRC32_sessionClientData = 825806990,

  /**
   * @generated from enum value: CRC32_httpSessionData = -606579889;
   */
  CRC32_httpSessionData = -606579889,

  /**
   * @generated from enum value: CRC32_session_queryAuthKey = 1798174801;
   */
  CRC32_session_queryAuthKey = 1798174801,

  /**
   * @generated from enum value: CRC32_session_setAuthKey = 487672075;
   */
  CRC32_session_setAuthKey = 487672075,

  /**
   * @generated from enum value: CRC32_session_createSession = 1091351053;
   */
  CRC32_session_createSession = 1091351053,

  /**
   * @generated from enum value: CRC32_session_sendDataToSession = -2023019028;
   */
  CRC32_session_sendDataToSession = -2023019028,

  /**
   * @generated from enum value: CRC32_session_sendHttpDataToSession = -1142152274;
   */
  CRC32_session_sendHttpDataToSession = -1142152274,

  /**
   * @generated from enum value: CRC32_session_closeSession = 393200211;
   */
  CRC32_session_closeSession = 393200211,

  /**
   * @generated from enum value: CRC32_session_pushUpdatesData = 1075152191;
   */
  CRC32_session_pushUpdatesData = 1075152191,

  /**
   * @generated from enum value: CRC32_session_pushSessionUpdatesData = 106898165;
   */
  CRC32_session_pushSessionUpdatesData = 106898165,

  /**
   * @generated from enum value: CRC32_session_pushRpcResultData = 556344000;
   */
  CRC32_session_pushRpcResultData = 556344000,
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.SessionClientEvent
 */
export interface SessionClientEvent {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string

  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor

  /**
   * @generated from field: optional string server_id = 3;
   */
  serverId?: string

  /**
   * @generated from field: optional int32 conn_type = 4;
   */
  connType?: number

  /**
   * @generated from field: optional int64 auth_key_id = 5;
   */
  authKeyId?: bigint

  /**
   * @generated from field: optional int64 session_id = 6;
   */
  sessionId?: bigint

  /**
   * @generated from field: optional string client_ip = 7;
   */
  clientIp?: string
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.TLSessionClientEvent
 */
export interface TLSessionClientEvent {
  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.SessionClientEvent data2 = 1;
   */
  data2?: SessionClientEvent
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.SessionClientData
 */
export interface SessionClientData {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string

  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor

  /**
   * @generated from field: optional string server_id = 3;
   */
  serverId?: string

  /**
   * @generated from field: optional int32 conn_type = 4;
   */
  connType?: number

  /**
   * @generated from field: optional int64 auth_key_id = 5;
   */
  authKeyId?: bigint

  /**
   * @generated from field: optional int64 session_id = 6;
   */
  sessionId?: bigint

  /**
   * @generated from field: optional string client_ip = 7;
   */
  clientIp?: string

  /**
   * @generated from field: optional int32 quick_ack = 8;
   */
  quickAck?: number

  /**
   * @generated from field: optional int64 salt = 9;
   */
  salt?: bigint

  /**
   * @generated from field: optional bytes payload = 10;
   */
  payload?: Uint8Array
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.TLSessionClientData
 */
export interface TLSessionClientData {
  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.SessionClientData data2 = 1;
   */
  data2?: SessionClientData
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.HttpSessionData
 */
export interface HttpSessionData {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string

  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor

  /**
   * @generated from field: optional bytes payload = 3;
   */
  payload?: Uint8Array
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.TLHttpSessionData
 */
export interface TLHttpSessionData {
  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.HttpSessionData data2 = 1;
   */
  data2?: HttpSessionData
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.TLSessionQueryAuthKey
 */
export interface TLSessionQueryAuthKey {
  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$?: TLConstructor

  /**
   * @generated from field: optional int64 auth_key_id = 3;
   */
  authKeyId?: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.TLSessionSetAuthKey
 */
export interface TLSessionSetAuthKey {
  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$?: TLConstructor

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.AuthKeyInfo auth_key = 3;
   */
  authKey?: AuthKeyInfo

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.FutureSalt future_salt = 4;
   */
  futureSalt?: FutureSalt

  /**
   * @generated from field: optional int32 expires_in = 5;
   */
  expiresIn?: number
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.TLSessionCreateSession
 */
export interface TLSessionCreateSession {
  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$?: TLConstructor

  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.SessionClientEvent client = 3;
   */
  client?: SessionClientEvent
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.TLSessionSendDataToSession
 */
export interface TLSessionSendDataToSession {
  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$?: TLConstructor

  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.SessionClientData data = 3;
   */
  data?: SessionClientData
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.TLSessionSendHttpDataToSession
 */
export interface TLSessionSendHttpDataToSession {
  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$?: TLConstructor

  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.SessionClientData client = 3;
   */
  client?: SessionClientData
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.TLSessionCloseSession
 */
export interface TLSessionCloseSession {
  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$?: TLConstructor

  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.SessionClientEvent client = 3;
   */
  client?: SessionClientEvent
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.TLSessionPushUpdatesData
 */
export interface TLSessionPushUpdatesData {
  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$?: TLConstructor

  /**
   * @generated from field: optional int64 auth_key_id = 3;
   */
  authKeyId?: bigint

  /**
   * @generated from field: optional bool notification = 4;
   */
  notification?: boolean

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.Updates updates = 5;
   */
  updates?: Updates
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.TLSessionPushSessionUpdatesData
 */
export interface TLSessionPushSessionUpdatesData {
  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$?: TLConstructor

  /**
   * @generated from field: optional int64 auth_key_id = 3;
   */
  authKeyId?: bigint

  /**
   * @generated from field: optional int64 session_id = 4;
   */
  sessionId?: bigint

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.Updates updates = 5;
   */
  updates?: Updates
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.TLSessionPushRpcResultData
 */
export interface TLSessionPushRpcResultData {
  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$?: TLConstructor

  /**
   * @generated from field: optional int64 auth_key_id = 3;
   */
  authKeyId?: bigint

  /**
   * @generated from field: optional int64 session_id = 4;
   */
  sessionId?: bigint

  /**
   * @generated from field: optional int64 client_req_msg_id = 5;
   */
  clientReqMsgId?: bigint

  /**
   * @generated from field: optional bytes rpc_result_data = 6;
   */
  rpcResultData?: Uint8Array
}
