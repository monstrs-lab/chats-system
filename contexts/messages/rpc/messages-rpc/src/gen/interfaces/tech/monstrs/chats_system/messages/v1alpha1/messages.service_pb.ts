// @generated by protoc-gen-interfaces 0.0.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/messages/v1alpha1/messages.service.proto (package tech.monstrs.chats_system.messages.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { Query_Int64 } from '../../../queries/v1alpha1/queries_pb.js'
import type { Query_Order } from '../../../queries/v1alpha1/queries_pb.js'
import type { Query_Pager } from '../../../queries/v1alpha1/queries_pb.js'

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
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.Dialog
 */
export interface Dialog {
  /**
   * @generated from field: int64 id = 1;
   */
  id: bigint

  /**
   * @generated from field: int64 user_id = 2;
   */
  userId: bigint

  /**
   * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.PeerType peer_type = 3;
   */
  peerType: PeerType

  /**
   * @generated from field: int64 peer_id = 4;
   */
  peerId: bigint

  /**
   * @generated from field: int64 top_message_id = 5;
   */
  topMessageId: bigint

  /**
   * @generated from field: int64 read_inbox_max_id = 6;
   */
  readInboxMaxId: bigint

  /**
   * @generated from field: int64 read_outbox_max_id = 7;
   */
  readOutboxMaxId: bigint

  /**
   * @generated from field: int32 unread_count = 8;
   */
  unreadCount: number
}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.Message
 */
export interface Message {
  /**
   * @generated from field: int64 id = 1;
   */
  id: bigint

  /**
   * @generated from field: int64 message_id = 2;
   */
  messageId: bigint

  /**
   * @generated from field: int64 random_id = 3;
   */
  randomId: bigint

  /**
   * @generated from field: int64 user_id = 4;
   */
  userId: bigint

  /**
   * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.PeerType peer_type = 5;
   */
  peerType: PeerType

  /**
   * @generated from field: int64 peer_id = 6;
   */
  peerId: bigint

  /**
   * @generated from field: int64 dialog_id1 = 7;
   */
  dialogId1: bigint

  /**
   * @generated from field: int64 dialog_id2 = 8;
   */
  dialogId2: bigint

  /**
   * @generated from field: string message = 9;
   */
  message: string
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

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.ListDialogsRequest
 */
export interface ListDialogsRequest {
  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.Pager pager = 1;
   */
  pager?: Query_Pager

  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.Order order = 2;
   */
  order?: Query_Order

  /**
   * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.ListDialogsRequest.DialogsQuery query = 3;
   */
  query?: ListDialogsRequest_DialogsQuery
}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.ListDialogsRequest.DialogsQuery
 */
export interface ListDialogsRequest_DialogsQuery {
  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.Int64 id = 1;
   */
  id?: Query_Int64

  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.Int64 user_id = 2;
   */
  userId?: Query_Int64
}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.ListDialogsResponse
 */
export interface ListDialogsResponse {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.messages.v1alpha1.Dialog dialogs = 1;
   */
  dialogs: Dialog[]
}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.ListMessagesRequest
 */
export interface ListMessagesRequest {
  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.Pager pager = 1;
   */
  pager?: Query_Pager

  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.Order order = 2;
   */
  order?: Query_Order

  /**
   * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.ListMessagesRequest.MessagesQuery query = 3;
   */
  query?: ListMessagesRequest_MessagesQuery
}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.ListMessagesRequest.MessagesQuery
 */
export interface ListMessagesRequest_MessagesQuery {
  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.Int64 id = 1;
   */
  id?: Query_Int64

  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.Int64 user_id = 2;
   */
  userId?: Query_Int64

  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.Int64 dialog_id1 = 3;
   */
  dialogId1?: Query_Int64

  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.Int64 dialog_id2 = 4;
   */
  dialogId2?: Query_Int64
}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.ListMessagesResponse
 */
export interface ListMessagesResponse {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.messages.v1alpha1.Message messages = 1;
   */
  messages: Message[]
}