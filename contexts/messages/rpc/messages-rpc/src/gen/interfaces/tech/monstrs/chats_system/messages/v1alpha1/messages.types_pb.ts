// @generated by protoc-gen-interfaces 0.0.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/messages/v1alpha1/messages.types.proto (package tech.monstrs.chats_system.messages.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { Peer, PeerType } from "../../core/v1alpha1/peer.types_pb.js";

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.Dialog
 */
export interface Dialog {
  /**
   * @generated from field: int64 id = 1;
   */
  id: bigint;

  /**
   * @generated from field: int64 user_id = 2;
   */
  userId: bigint;

  /**
   * @generated from field: tech.monstrs.chats_system.core.v1alpha1.PeerType peer_type = 3;
   */
  peerType: PeerType;

  /**
   * @generated from field: int64 peer_id = 4;
   */
  peerId: bigint;

  /**
   * @generated from field: int64 peer_dialog_id = 5;
   */
  peerDialogId: bigint;

  /**
   * @generated from field: int64 date = 6;
   */
  date: bigint;

  /**
   * @generated from field: bool pinned = 7;
   */
  pinned: boolean;

  /**
   * @generated from field: int64 top_message = 8;
   */
  topMessage: bigint;

  /**
   * @generated from field: int32 read_inbox_max_id = 9;
   */
  readInboxMaxId: number;

  /**
   * @generated from field: int32 read_outbox_max_id = 10;
   */
  readOutboxMaxId: number;

  /**
   * @generated from field: int32 unread_count = 11;
   */
  unreadCount: number;

  /**
   * @generated from field: bool unread_mark = 12;
   */
  unreadMark: boolean;

  /**
   * @generated from field: int32 unread_mentions_count = 13;
   */
  unreadMentionsCount: number;

  /**
   * @generated from field: int32 unread_reactions_count = 14;
   */
  unreadReactionsCount: number;

  /**
   * @generated from field: int32 folder_id = 15;
   */
  folderId: number;

  /**
   * @generated from field: int64 folder_pinned = 16;
   */
  folderPinned: bigint;

}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.MessageFwdHeader
 */
export interface MessageFwdHeader {
  /**
   * @generated from field: bool imported = 1;
   */
  imported: boolean;

  /**
   * @generated from field: tech.monstrs.chats_system.core.v1alpha1.Peer from_id = 2;
   */
  fromId?: Peer;

  /**
   * @generated from field: string from_name = 3;
   */
  fromName: string;

  /**
   * @generated from field: int64 date = 4;
   */
  date: bigint;

  /**
   * @generated from field: int32 channel_post = 5;
   */
  channelPost: number;

  /**
   * @generated from field: string post_author = 6;
   */
  postAuthor: string;

  /**
   * @generated from field: tech.monstrs.chats_system.core.v1alpha1.Peer saved_from_peer = 7;
   */
  savedFromPeer?: Peer;

  /**
   * @generated from field: int32 saved_from_msg_id = 8;
   */
  savedFromMsgId: number;

  /**
   * @generated from field: string psa_type = 9;
   */
  psaType: string;

}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.MessageReplyHeader
 */
export interface MessageReplyHeader {
  /**
   * @generated from field: bool reply_to_scheduled = 1;
   */
  replyToScheduled: boolean;

  /**
   * @generated from field: bool forum_topic = 2;
   */
  forumTopic: boolean;

  /**
   * @generated from field: int32 reply_to_msg_id = 3;
   */
  replyToMsgId: number;

  /**
   * @generated from field: tech.monstrs.chats_system.core.v1alpha1.Peer reply_to_peer_id = 4;
   */
  replyToPeerId?: Peer;

  /**
   * @generated from field: int32 reply_to_top_id = 5;
   */
  replyToTopId: number;

  /**
   * @generated from field: int64 user_id = 6;
   */
  userId: bigint;

  /**
   * @generated from field: int32 story_id = 7;
   */
  storyId: number;

}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.MessageMedia
 */
export interface MessageMedia {
}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.ReplyMarkup
 */
export interface ReplyMarkup {
}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.MessageEntity
 */
export interface MessageEntity {
}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.MessageReplies
 */
export interface MessageReplies {
}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.MessageReactions
 */
export interface MessageReactions {
}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.RestrictionReason
 */
export interface RestrictionReason {
}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.MessageAction
 */
export interface MessageAction {
}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.Message
 */
export interface Message {
  /**
   * @generated from field: bool out = 1;
   */
  out: boolean;

  /**
   * @generated from field: bool mentioned = 2;
   */
  mentioned: boolean;

  /**
   * @generated from field: bool media_unread = 3;
   */
  mediaUnread: boolean;

  /**
   * @generated from field: bool silent = 4;
   */
  silent: boolean;

  /**
   * @generated from field: bool post = 5;
   */
  post: boolean;

  /**
   * @generated from field: bool from_scheduled = 6;
   */
  fromScheduled: boolean;

  /**
   * @generated from field: bool legacy = 7;
   */
  legacy: boolean;

  /**
   * @generated from field: bool edit_hide = 8;
   */
  editHide: boolean;

  /**
   * @generated from field: bool pinned = 9;
   */
  pinned: boolean;

  /**
   * @generated from field: bool noforwards = 10;
   */
  noforwards: boolean;

  /**
   * @generated from field: int64 id = 11;
   */
  id: bigint;

  /**
   * @generated from field: tech.monstrs.chats_system.core.v1alpha1.Peer from = 12;
   */
  from?: Peer;

  /**
   * @generated from field: tech.monstrs.chats_system.core.v1alpha1.Peer peer = 13;
   */
  peer?: Peer;

  /**
   * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.MessageFwdHeader fwd_from = 16;
   */
  fwdFrom?: MessageFwdHeader;

  /**
   * @generated from field: int64 via_bot_id = 17;
   */
  viaBotId: bigint;

  /**
   * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.MessageReplyHeader reply_to = 18;
   */
  replyTo?: MessageReplyHeader;

  /**
   * @generated from field: int64 date = 19;
   */
  date: bigint;

  /**
   * @generated from field: string message = 20;
   */
  message: string;

  /**
   * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.MessageMedia media = 21;
   */
  media?: MessageMedia;

  /**
   * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.ReplyMarkup reply_markup = 22;
   */
  replyMarkup?: ReplyMarkup;

  /**
   * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.MessageEntity entities = 23;
   */
  entities?: MessageEntity;

  /**
   * @generated from field: int32 views = 24;
   */
  views: number;

  /**
   * @generated from field: int32 forwards = 25;
   */
  forwards: number;

  /**
   * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.MessageReplies replies = 26;
   */
  replies?: MessageReplies;

  /**
   * @generated from field: int32 edit_date = 27;
   */
  editDate: number;

  /**
   * @generated from field: string post_author = 28;
   */
  postAuthor: string;

  /**
   * @generated from field: int64 grouped_id = 29;
   */
  groupedId: bigint;

  /**
   * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.MessageReactions reactions = 30;
   */
  reactions?: MessageReactions;

  /**
   * @generated from field: repeated tech.monstrs.chats_system.messages.v1alpha1.RestrictionReason restriction_reason = 31;
   */
  restrictionReason: RestrictionReason[];

  /**
   * @generated from field: int32 ttl_period = 32;
   */
  ttlPeriod: number;

  /**
   * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.MessageAction action = 33;
   */
  action?: MessageAction;

}

/**
 * @generated from message tech.monstrs.chats_system.messages.v1alpha1.OutboxMessage
 */
export interface OutboxMessage {
  /**
   * @generated from field: bool no_webpage = 1;
   */
  noWebpage: boolean;

  /**
   * @generated from field: bool background = 2;
   */
  background: boolean;

  /**
   * @generated from field: int32 schedule_date = 3;
   */
  scheduleDate: number;

  /**
   * @generated from field: int64 random_id = 4;
   */
  randomId: bigint;

  /**
   * @generated from field: tech.monstrs.chats_system.messages.v1alpha1.Message message = 5;
   */
  message?: Message;

}

