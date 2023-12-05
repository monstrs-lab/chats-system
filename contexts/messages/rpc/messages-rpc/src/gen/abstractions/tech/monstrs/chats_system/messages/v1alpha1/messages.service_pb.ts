// @generated by protoc-gen-abstractions 0.0.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/messages/v1alpha1/messages.service.proto (package tech.monstrs.chats_system.messages.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { Dialog, Message, OutboxMessage, Peer } from "./messages.types_pb.js";

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.InputPeerEmpty
 */
export abstract class InputPeerEmpty {
}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.GetUserDialogsRequest
 */
export abstract class GetUserDialogsRequest {
  /**
   * @generated from field: int64 user_id = 1;
   */
  abstract readonly userId: bigint;

  /**
   * @generated from field: bool exclude_pinned = 2;
   */
  abstract readonly excludePinned: boolean;

  /**
   * @generated from field: int32 folder_id = 3;
   */
  abstract readonly folderId: number;

  /**
   * @generated from field: int32 offset_date = 4;
   */
  abstract readonly offsetDate: number;

  /**
   * @generated from field: int32 offset_id = 5;
   */
  abstract readonly offsetId: number;

  /**
   * @generated from oneof tech.monstrs.chats_system.messages.v1alpha1.GetUserDialogsRequest.offset_peer
   */
  abstract readonly offsetPeer: {
    /**
     * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.InputPeerEmpty empty = 6;
     */
    value: InputPeerEmpty;
    case: "empty";
  } | { case: undefined; value?: undefined };

  /**
   * @generated from field: int32 limit = 7;
   */
  abstract readonly limit: number;

  /**
   * @generated from field: int64 hash = 8;
   */
  abstract readonly hash: bigint;

}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.GetUserDialogsResponse
 */
export abstract class GetUserDialogsResponse {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.messages.v1alpha1.Dialog dialogs = 1;
   */
  abstract readonly dialogs: Dialog[];

}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.SendMessageRequest
 */
export abstract class SendMessageRequest {
  /**
   * @generated from field: int64 user_id = 1;
   */
  abstract readonly userId: bigint;

  /**
   * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.Peer peer = 2;
   */
  abstract readonly peer?: Peer;

  /**
   * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.OutboxMessage message = 3;
   */
  abstract readonly message?: OutboxMessage;

}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.SendMessageResponse
 */
export abstract class SendMessageResponse {
  /**
   * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.Message outbox_message = 1;
   */
  abstract readonly outboxMessage?: Message;

  /**
   * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.Message inbox_message = 2;
   */
  abstract readonly inboxMessage?: Message;

  /**
   * @generated from field: int32 pts = 3;
   */
  abstract readonly pts: number;

  /**
   * @generated from field: int32 pts_count = 4;
   */
  abstract readonly ptsCount: number;

}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.GetUserMessagesRequest
 */
export abstract class GetUserMessagesRequest {
  /**
   * @generated from field: int64 user_id = 1;
   */
  abstract readonly userId: bigint;

  /**
   * @generated from field: repeated int32 message_ids = 2;
   */
  abstract readonly messageIds: number[];

}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.GetUserMessagesResponse
 */
export abstract class GetUserMessagesResponse {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.messages.v1alpha1.Message messages = 1;
   */
  abstract readonly messages: Message[];

}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.GetUserPeerMessagesRequest
 */
export abstract class GetUserPeerMessagesRequest {
  /**
   * @generated from field: int64 user_id = 1;
   */
  abstract readonly userId: bigint;

  /**
   * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.Peer peer = 2;
   */
  abstract readonly peer?: Peer;

}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.GetUserPeerMessagesResponse
 */
export abstract class GetUserPeerMessagesResponse {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.messages.v1alpha1.Message messages = 1;
   */
  abstract readonly messages: Message[];

}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.ReadUserMessagesRequest
 */
export abstract class ReadUserMessagesRequest {
  /**
   * @generated from field: int64 user_id = 1;
   */
  abstract readonly userId: bigint;

  /**
   * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.Peer peer = 2;
   */
  abstract readonly peer?: Peer;

  /**
   * @generated from field: int32 max_id = 3;
   */
  abstract readonly maxId: number;

}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.ReadUserMessagesResponse
 */
export abstract class ReadUserMessagesResponse {
  /**
   * @generated from field: int32 pts = 1;
   */
  abstract readonly pts: number;

  /**
   * @generated from field: int32 pts_count = 2;
   */
  abstract readonly ptsCount: number;

}

