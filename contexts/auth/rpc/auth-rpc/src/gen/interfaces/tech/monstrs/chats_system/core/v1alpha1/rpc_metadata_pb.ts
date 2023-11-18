// @generated by protoc-gen-interfaces 0.0.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/core/v1alpha1/rpc_metadata.proto (package metadata, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * @generated from message metadata.TakeoutMessageRange
 */
export interface TakeoutMessageRange {
  /**
   * @generated from field: optional int32 min_id = 1;
   */
  minId?: number;

  /**
   * @generated from field: optional int32 max_id = 2;
   */
  maxId?: number;

}

/**
 * @generated from message metadata.Takeout
 */
export interface Takeout {
  /**
   * @generated from field: optional int64 id = 1;
   */
  id?: bigint;

  /**
   * @generated from field: optional metadata.TakeoutMessageRange range = 2;
   */
  range?: TakeoutMessageRange;

}

/**
 * @generated from message metadata.RpcMetadata
 */
export interface RpcMetadata {
  /**
   * @generated from field: optional string server_id = 1;
   */
  serverId?: string;

  /**
   * @generated from field: optional string client_addr = 3;
   */
  clientAddr?: string;

  /**
   * @generated from field: optional int64 auth_id = 4;
   */
  authId?: bigint;

  /**
   * @generated from field: optional int64 session_id = 5;
   */
  sessionId?: bigint;

  /**
   * @generated from field: optional int64 receive_time = 8;
   */
  receiveTime?: bigint;

  /**
   * @generated from field: optional int64 user_id = 11;
   */
  userId?: bigint;

  /**
   * @generated from field: optional int64 client_msg_id = 12;
   */
  clientMsgId?: bigint;

  /**
   * @generated from field: optional bool is_bot = 13;
   */
  isBot?: boolean;

  /**
   * @generated from field: optional int32 layer = 14;
   */
  layer?: number;

  /**
   * @generated from field: optional string client = 15;
   */
  client?: string;

  /**
   * @generated from field: optional bool is_admin = 16;
   */
  isAdmin?: boolean;

  /**
   * @generated from field: optional metadata.Takeout takeout = 20;
   */
  takeout?: Takeout;

  /**
   * @generated from field: optional string langpack = 21;
   */
  langpack?: string;

  /**
   * @generated from field: optional int64 perm_auth_key_id = 22;
   */
  permAuthKeyId?: bigint;

}

