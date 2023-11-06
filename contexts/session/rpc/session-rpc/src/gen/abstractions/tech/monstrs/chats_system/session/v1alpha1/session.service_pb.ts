// @generated by protoc-gen-abstractions 0.0.1 with parameter "target=ts"
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
export abstract class SessionClientEvent {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  abstract readonly predicateName?: string

  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.TLConstructor constructor = 2;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: optional string server_id = 3;
   */
  abstract readonly serverId?: string

  /**
   * @generated from field: optional int32 conn_type = 4;
   */
  abstract readonly connType?: number

  /**
   * @generated from field: optional int64 auth_key_id = 5;
   */
  abstract readonly authKeyId?: bigint

  /**
   * @generated from field: optional int64 session_id = 6;
   */
  abstract readonly sessionId?: bigint

  /**
   * @generated from field: optional string client_ip = 7;
   */
  abstract readonly clientIp?: string
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.TLSessionClientEvent
 */
export abstract class TLSessionClientEvent {
  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.SessionClientEvent data2 = 1;
   */
  abstract readonly data2?: SessionClientEvent
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.SessionClientData
 */
export abstract class SessionClientData {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  abstract readonly predicateName?: string

  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.TLConstructor constructor = 2;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: optional string server_id = 3;
   */
  abstract readonly serverId?: string

  /**
   * @generated from field: optional int32 conn_type = 4;
   */
  abstract readonly connType?: number

  /**
   * @generated from field: optional int64 auth_key_id = 5;
   */
  abstract readonly authKeyId?: bigint

  /**
   * @generated from field: optional int64 session_id = 6;
   */
  abstract readonly sessionId?: bigint

  /**
   * @generated from field: optional string client_ip = 7;
   */
  abstract readonly clientIp?: string

  /**
   * @generated from field: optional int32 quick_ack = 8;
   */
  abstract readonly quickAck?: number

  /**
   * @generated from field: optional int64 salt = 9;
   */
  abstract readonly salt?: bigint

  /**
   * @generated from field: optional bytes payload = 10;
   */
  abstract readonly payload?: Uint8Array
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.TLSessionClientData
 */
export abstract class TLSessionClientData {
  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.SessionClientData data2 = 1;
   */
  abstract readonly data2?: SessionClientData
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.HttpSessionData
 */
export abstract class HttpSessionData {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  abstract readonly predicateName?: string

  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.TLConstructor constructor = 2;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: optional bytes payload = 3;
   */
  abstract readonly payload?: Uint8Array
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.TLHttpSessionData
 */
export abstract class TLHttpSessionData {
  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.HttpSessionData data2 = 1;
   */
  abstract readonly data2?: HttpSessionData
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.TLSessionQueryAuthKey
 */
export abstract class TLSessionQueryAuthKey {
  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.TLConstructor constructor = 1;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: optional int64 auth_key_id = 3;
   */
  abstract readonly authKeyId?: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.TLSessionSetAuthKey
 */
export abstract class TLSessionSetAuthKey {
  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.TLConstructor constructor = 1;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.AuthKeyInfo auth_key = 3;
   */
  abstract readonly authKey?: AuthKeyInfo

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.FutureSalt future_salt = 4;
   */
  abstract readonly futureSalt?: FutureSalt

  /**
   * @generated from field: optional int32 expires_in = 5;
   */
  abstract readonly expiresIn?: number
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.TLSessionCreateSession
 */
export abstract class TLSessionCreateSession {
  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.TLConstructor constructor = 1;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.SessionClientEvent client = 3;
   */
  abstract readonly client?: SessionClientEvent
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.TLSessionSendDataToSession
 */
export abstract class TLSessionSendDataToSession {
  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.TLConstructor constructor = 1;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.SessionClientData data = 3;
   */
  abstract readonly data?: SessionClientData
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.TLSessionSendHttpDataToSession
 */
export abstract class TLSessionSendHttpDataToSession {
  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.TLConstructor constructor = 1;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.SessionClientData client = 3;
   */
  abstract readonly client?: SessionClientData
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.TLSessionCloseSession
 */
export abstract class TLSessionCloseSession {
  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.TLConstructor constructor = 1;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.SessionClientEvent client = 3;
   */
  abstract readonly client?: SessionClientEvent
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.TLSessionPushUpdatesData
 */
export abstract class TLSessionPushUpdatesData {
  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.TLConstructor constructor = 1;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: optional int64 auth_key_id = 3;
   */
  abstract readonly authKeyId?: bigint

  /**
   * @generated from field: optional bool notification = 4;
   */
  abstract readonly notification?: boolean

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.Updates updates = 5;
   */
  abstract readonly updates?: Updates
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.TLSessionPushSessionUpdatesData
 */
export abstract class TLSessionPushSessionUpdatesData {
  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.TLConstructor constructor = 1;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: optional int64 auth_key_id = 3;
   */
  abstract readonly authKeyId?: bigint

  /**
   * @generated from field: optional int64 session_id = 4;
   */
  abstract readonly sessionId?: bigint

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.Updates updates = 5;
   */
  abstract readonly updates?: Updates
}

/**
 * @generated from message tech.monstrs.chats_system.session.v1alpha1.TLSessionPushRpcResultData
 */
export abstract class TLSessionPushRpcResultData {
  /**
   * @generated from field: optional tech.monstrs.chats_system.session.v1alpha1.TLConstructor constructor = 1;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: optional int64 auth_key_id = 3;
   */
  abstract readonly authKeyId?: bigint

  /**
   * @generated from field: optional int64 session_id = 4;
   */
  abstract readonly sessionId?: bigint

  /**
   * @generated from field: optional int64 client_req_msg_id = 5;
   */
  abstract readonly clientReqMsgId?: bigint

  /**
   * @generated from field: optional bytes rpc_result_data = 6;
   */
  abstract readonly rpcResultData?: Uint8Array
}
