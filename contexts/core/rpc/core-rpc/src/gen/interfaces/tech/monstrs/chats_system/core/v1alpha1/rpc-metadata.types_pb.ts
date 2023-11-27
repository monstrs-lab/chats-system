// @generated by protoc-gen-interfaces 0.0.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/core/v1alpha1/rpc-metadata.types.proto (package tech.monstrs.chats_system.core.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.RpcMetadata
 */
export interface RpcMetadata {
  /**
   * @generated from field: int64 auth_key_id = 1;
   */
  authKeyId: bigint

  /**
   * @generated from field: int64 session_id = 2;
   */
  sessionId: bigint

  /**
   * @generated from field: int64 user_id = 3;
   */
  userId: bigint

  /**
   * @generated from field: int64 client_message_id = 4;
   */
  clientMessageId: bigint

  /**
   * @generated from field: int64 perm_auth_key_id = 5;
   */
  permAuthKeyId: bigint

  /**
   * @generated from field: string server_id = 6;
   */
  serverId: string

  /**
   * @generated from field: string client_ip = 7;
   */
  clientIp: string

  /**
   * @generated from field: int32 receive_time = 8;
   */
  receiveTime: number

  /**
   * @generated from field: int32 layer = 9;
   */
  layer: number

  /**
   * @generated from field: string client = 10;
   */
  client: string

  /**
   * @generated from field: string lang_pack = 11;
   */
  langPack: string
}
