// @generated by protoc-gen-interfaces 0.0.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/messages/v1alpha1/messages.service.proto (package tech.monstrs.chats_system.messages.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * @generated from enum tech.monstrs.chats_system.messages.v1alpha1.PeerType
 */
export enum PeerType {
  /**
   * @generated from enum value: UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * @generated from enum value: EMPTY = 1;
   */
  EMPTY = 1,

  /**
   * @generated from enum value: SELF = 2;
   */
  SELF = 2,

  /**
   * @generated from enum value: USER = 3;
   */
  USER = 3,

  /**
   * @generated from enum value: CHAT = 4;
   */
  CHAT = 4,

  /**
   * @generated from enum value: CHANNEL = 5;
   */
  CHANNEL = 5,

  /**
   * @generated from enum value: USERS = 6;
   */
  USERS = 6,

  /**
   * @generated from enum value: CHATS = 7;
   */
  CHATS = 7,
}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.SendMessageRequest
 */
export interface SendMessageRequest {
  /**
   * @generated from field: int64 random_id = 1;
   */
  randomId: bigint

  /**
   * @generated from field: int64 from_id = 2;
   */
  fromId: bigint

  /**
   * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.PeerType peer_type = 3;
   */
  peerType: PeerType

  /**
   * @generated from field: int64 peer_id = 4;
   */
  peerId: bigint

  /**
   * @generated from field: string message = 5;
   */
  message: string
}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.SendMessageResponse
 */
export interface SendMessageResponse {}
