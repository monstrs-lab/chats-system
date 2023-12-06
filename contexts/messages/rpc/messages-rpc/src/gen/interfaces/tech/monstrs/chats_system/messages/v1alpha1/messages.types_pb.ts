// @generated by protoc-gen-interfaces 0.0.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/messages/v1alpha1/messages.types.proto (package tech.monstrs.chats_system.messages.v1alpha1, syntax proto3)
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

  /**
   * @generated from enum value: ENCRYPTED_CHAT = 8;
   */
  ENCRYPTED_CHAT = 8,

  /**
   * @generated from enum value: BROADCASTS = 9;
   */
  BROADCASTS = 9,

  /**
   * @generated from enum value: USER_MESSAGE = 10;
   */
  USER_MESSAGE = 10,

  /**
   * @generated from enum value: CHANNEL_MESSAGE = 12;
   */
  CHANNEL_MESSAGE = 12,
}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.Peer
 */
export interface Peer {
  /**
   * @generated from field: int64 self_id = 1;
   */
  selfId: bigint

  /**
   * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.PeerType peer_type = 2;
   */
  peerType: PeerType

  /**
   * @generated from field: int64 peer_id = 3;
   */
  peerId: bigint

  /**
   * @generated from field: int64 access_hash = 5;
   */
  accessHash: bigint
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
   * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.Peer peer = 3;
   */
  peer?: Peer

  /**
   * @generated from field: int64 peer_dialog_id = 4;
   */
  peerDialogId: bigint

  /**
   * @generated from field: int64 date = 5;
   */
  date: bigint

  /**
   * @generated from field: bool pinned = 6;
   */
  pinned: boolean

  /**
   * @generated from field: int32 top_message = 7;
   */
  topMessage: number

  /**
   * @generated from field: int32 read_inbox_max_id = 8;
   */
  readInboxMaxId: number

  /**
   * @generated from field: int32 read_outbox_max_id = 9;
   */
  readOutboxMaxId: number

  /**
   * @generated from field: int32 unread_count = 10;
   */
  unreadCount: number

  /**
   * @generated from field: bool unread_mark = 11;
   */
  unreadMark: boolean

  /**
   * @generated from field: int32 unread_mentions_count = 12;
   */
  unreadMentionsCount: number

  /**
   * @generated from field: int32 unread_reactions_count = 13;
   */
  unreadReactionsCount: number

  /**
   * @generated from field: int32 folder_id = 14;
   */
  folderId: number

  /**
   * @generated from field: int64 folder_pinned = 15;
   */
  folderPinned: bigint
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
   * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.Peer from = 2;
   */
  from?: Peer

  /**
   * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.Peer peer = 3;
   */
  peer?: Peer

  /**
   * @generated from field: int32 message_id = 4;
   */
  messageId: number

  /**
   * @generated from field: int32 date = 5;
   */
  date: number

  /**
   * @generated from field: string message = 6;
   */
  message: string

  /**
   * @generated from field: int64 sender_user_id = 7;
   */
  senderUserId: bigint
}
