// @generated by protoc-gen-interfaces 0.0.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/messages/v1alpha1/messages.service.proto (package tech.monstrs.chats_system.messages.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { Dialog }        from './messages.types_pb.js'
import type { Message }       from './messages.types_pb.js'
import type { OutboxMessage } from './messages.types_pb.js'
import type { Peer }          from './messages.types_pb.js'

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.InputPeerEmpty
 */
export interface InputPeerEmpty {}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.GetUserDialogsRequest
 */
export interface GetUserDialogsRequest {
  /**
   * @generated from field: int64 user_id = 1;
   */
  userId: bigint

  /**
   * @generated from field: bool exclude_pinned = 2;
   */
  excludePinned: boolean

  /**
   * @generated from field: int32 folder_id = 3;
   */
  folderId: number

  /**
   * @generated from field: int32 offset_date = 4;
   */
  offsetDate: number

  /**
   * @generated from field: int32 offset_id = 5;
   */
  offsetId: number

  /**
   * @generated from oneof tech.monstrs.chats_system.messages.v1alpha1.GetUserDialogsRequest.offset_peer
   */
  offsetPeer:
    | {
        /**
         * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.InputPeerEmpty empty = 6;
         */
        value: InputPeerEmpty
        case: 'empty'
      }
    | { case: undefined; value?: undefined }

  /**
   * @generated from field: int32 limit = 7;
   */
  limit: number

  /**
   * @generated from field: int64 hash = 8;
   */
  hash: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.GetUserDialogsResponse
 */
export interface GetUserDialogsResponse {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.messages.v1alpha1.Dialog dialogs = 1;
   */
  dialogs: Dialog[]
}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.SendMessageRequest
 */
export interface SendMessageRequest {
  /**
   * @generated from field: int64 user_id = 1;
   */
  userId: bigint

  /**
   * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.Peer peer = 2;
   */
  peer?: Peer

  /**
   * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.OutboxMessage message = 3;
   */
  message?: OutboxMessage
}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.SendMessageResponse
 */
export interface SendMessageResponse {}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.GetUserMessagesRequest
 */
export interface GetUserMessagesRequest {
  /**
   * @generated from field: int64 user_id = 1;
   */
  userId: bigint

  /**
   * @generated from field: repeated int32 message_ids = 2;
   */
  messageIds: number[]
}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.GetUserMessagesResponse
 */
export interface GetUserMessagesResponse {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.messages.v1alpha1.Message messages = 1;
   */
  messages: Message[]
}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.GetUserPeerMessagesRequest
 */
export interface GetUserPeerMessagesRequest {
  /**
   * @generated from field: int64 user_id = 1;
   */
  userId: bigint

  /**
   * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.Peer peer = 2;
   */
  peer?: Peer
}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.GetUserPeerMessagesResponse
 */
export interface GetUserPeerMessagesResponse {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.messages.v1alpha1.Message messages = 1;
   */
  messages: Message[]
}
