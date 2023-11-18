// @generated by protoc-gen-interfaces 0.0.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/core/v1alpha1/schema.tl.transport.proto (package tech.monstrs.chats_system.core.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { TLConstructor } from "./schema.tl.crc32_pb.js";

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.AccessPointRule
 */
export interface AccessPointRule {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: optional string phone_prefix_rules = 3;
   */
  phonePrefixRules?: string;

  /**
   * @generated from field: optional int32 dc_id = 4;
   */
  dcId?: number;

  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.IpPort ips = 5;
   */
  ips: IpPort[];

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLAccessPointRule
 */
export interface TLAccessPointRule {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.AccessPointRule data2 = 1;
   */
  data2?: AccessPointRule;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.BadMsgNotification
 */
export interface BadMsgNotification {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: optional int64 bad_msg_id = 3;
   */
  badMsgId?: bigint;

  /**
   * @generated from field: optional int32 bad_msg_seqno = 4;
   */
  badMsgSeqno?: number;

  /**
   * @generated from field: optional int32 error_code = 5;
   */
  errorCode?: number;

  /**
   * @generated from field: optional int64 new_server_salt = 6;
   */
  newServerSalt?: bigint;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLBadMsgNotification
 */
export interface TLBadMsgNotification {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.BadMsgNotification data2 = 1;
   */
  data2?: BadMsgNotification;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLBadServerSalt
 */
export interface TLBadServerSalt {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.BadMsgNotification data2 = 1;
   */
  data2?: BadMsgNotification;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.DestroySessionRes
 */
export interface DestroySessionRes {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: optional int64 session_id = 3;
   */
  sessionId?: bigint;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLDestroySessionOk
 */
export interface TLDestroySessionOk {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.DestroySessionRes data2 = 1;
   */
  data2?: DestroySessionRes;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLDestroySessionNone
 */
export interface TLDestroySessionNone {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.DestroySessionRes data2 = 1;
   */
  data2?: DestroySessionRes;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.FutureSalt
 */
export interface FutureSalt {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: optional int32 valid_since = 3;
   */
  validSince?: number;

  /**
   * @generated from field: optional int32 valid_until = 4;
   */
  validUntil?: number;

  /**
   * @generated from field: optional int64 salt = 5;
   */
  salt?: bigint;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLFutureSalt
 */
export interface TLFutureSalt {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.FutureSalt data2 = 1;
   */
  data2?: FutureSalt;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.FutureSalts
 */
export interface FutureSalts {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: optional int64 req_msg_id = 3;
   */
  reqMsgId?: bigint;

  /**
   * @generated from field: optional int32 now = 4;
   */
  now?: number;

  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.TLFutureSalt salts = 5;
   */
  salts: TLFutureSalt[];

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLFutureSalts
 */
export interface TLFutureSalts {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.FutureSalts data2 = 1;
   */
  data2?: FutureSalts;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.HttpWait
 */
export interface HttpWait {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: optional int32 max_delay = 3;
   */
  maxDelay?: number;

  /**
   * @generated from field: optional int32 wait_after = 4;
   */
  waitAfter?: number;

  /**
   * @generated from field: optional int32 max_wait = 5;
   */
  maxWait?: number;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLHttpWait
 */
export interface TLHttpWait {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.HttpWait data2 = 1;
   */
  data2?: HttpWait;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.IpPort
 */
export interface IpPort {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: optional int32 ipv4 = 3;
   */
  ipv4?: number;

  /**
   * @generated from field: optional int32 port = 4;
   */
  port?: number;

  /**
   * @generated from field: optional bytes secret = 5;
   */
  secret?: Uint8Array;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLIpPort
 */
export interface TLIpPort {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.IpPort data2 = 1;
   */
  data2?: IpPort;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLIpPortSecret
 */
export interface TLIpPortSecret {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.IpPort data2 = 1;
   */
  data2?: IpPort;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.MsgDetailedInfo
 */
export interface MsgDetailedInfo {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: optional int64 msg_id = 3;
   */
  msgId?: bigint;

  /**
   * @generated from field: optional int64 answer_msg_id = 4;
   */
  answerMsgId?: bigint;

  /**
   * @generated from field: optional int32 bytes = 5;
   */
  bytes?: number;

  /**
   * @generated from field: optional int32 status = 6;
   */
  status?: number;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLMsgDetailedInfo
 */
export interface TLMsgDetailedInfo {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.MsgDetailedInfo data2 = 1;
   */
  data2?: MsgDetailedInfo;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLMsgNewDetailedInfo
 */
export interface TLMsgNewDetailedInfo {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.MsgDetailedInfo data2 = 1;
   */
  data2?: MsgDetailedInfo;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.MsgResendReq
 */
export interface MsgResendReq {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: repeated int64 msg_ids = 3;
   */
  msgIds: bigint[];

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLMsgResendReq
 */
export interface TLMsgResendReq {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.MsgResendReq data2 = 1;
   */
  data2?: MsgResendReq;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.MsgsAck
 */
export interface MsgsAck {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: repeated int64 msg_ids = 3;
   */
  msgIds: bigint[];

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLMsgsAck
 */
export interface TLMsgsAck {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.MsgsAck data2 = 1;
   */
  data2?: MsgsAck;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.MsgsAllInfo
 */
export interface MsgsAllInfo {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: repeated int64 msg_ids = 3;
   */
  msgIds: bigint[];

  /**
   * @generated from field: optional string info = 4;
   */
  info?: string;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLMsgsAllInfo
 */
export interface TLMsgsAllInfo {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.MsgsAllInfo data2 = 1;
   */
  data2?: MsgsAllInfo;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.MsgsStateInfo
 */
export interface MsgsStateInfo {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: optional int64 req_msg_id = 3;
   */
  reqMsgId?: bigint;

  /**
   * @generated from field: optional string info = 4;
   */
  info?: string;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLMsgsStateInfo
 */
export interface TLMsgsStateInfo {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.MsgsStateInfo data2 = 1;
   */
  data2?: MsgsStateInfo;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.MsgsStateReq
 */
export interface MsgsStateReq {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: repeated int64 msg_ids = 3;
   */
  msgIds: bigint[];

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLMsgsStateReq
 */
export interface TLMsgsStateReq {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.MsgsStateReq data2 = 1;
   */
  data2?: MsgsStateReq;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.NewSession
 */
export interface NewSession {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: optional int64 first_msg_id = 3;
   */
  firstMsgId?: bigint;

  /**
   * @generated from field: optional int64 unique_id = 4;
   */
  uniqueId?: bigint;

  /**
   * @generated from field: optional int64 server_salt = 5;
   */
  serverSalt?: bigint;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLNewSessionCreated
 */
export interface TLNewSessionCreated {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.NewSession data2 = 1;
   */
  data2?: NewSession;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.Pong
 */
export interface Pong {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: optional int64 msg_id = 3;
   */
  msgId?: bigint;

  /**
   * @generated from field: optional int64 ping_id = 4;
   */
  pingId?: bigint;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLPong
 */
export interface TLPong {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.Pong data2 = 1;
   */
  data2?: Pong;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.RpcDropAnswer
 */
export interface RpcDropAnswer {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: optional int64 msg_id = 3;
   */
  msgId?: bigint;

  /**
   * @generated from field: optional int32 seq_no = 4;
   */
  seqNo?: number;

  /**
   * @generated from field: optional int32 bytes = 5;
   */
  bytes?: number;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLRpcAnswerUnknown
 */
export interface TLRpcAnswerUnknown {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.RpcDropAnswer data2 = 1;
   */
  data2?: RpcDropAnswer;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLRpcAnswerDroppedRunning
 */
export interface TLRpcAnswerDroppedRunning {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.RpcDropAnswer data2 = 1;
   */
  data2?: RpcDropAnswer;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLRpcAnswerDropped
 */
export interface TLRpcAnswerDropped {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.RpcDropAnswer data2 = 1;
   */
  data2?: RpcDropAnswer;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.RpcError
 */
export interface RpcError {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: optional int32 error_code = 3;
   */
  errorCode?: number;

  /**
   * @generated from field: optional string error_message = 4;
   */
  errorMessage?: string;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLRpcError
 */
export interface TLRpcError {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.RpcError data2 = 1;
   */
  data2?: RpcError;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TlsBlock
 */
export interface TlsBlock {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: optional string data = 3;
   */
  data?: string;

  /**
   * @generated from field: optional int32 length = 4;
   */
  length?: number;

  /**
   * @generated from field: optional int32 seed = 5;
   */
  seed?: number;

  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.TlsBlock entries = 6;
   */
  entries: TlsBlock[];

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLTlsBlockString
 */
export interface TLTlsBlockString {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TlsBlock data2 = 1;
   */
  data2?: TlsBlock;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLTlsBlockRandom
 */
export interface TLTlsBlockRandom {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TlsBlock data2 = 1;
   */
  data2?: TlsBlock;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLTlsBlockZero
 */
export interface TLTlsBlockZero {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TlsBlock data2 = 1;
   */
  data2?: TlsBlock;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLTlsBlockDomain
 */
export interface TLTlsBlockDomain {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TlsBlock data2 = 1;
   */
  data2?: TlsBlock;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLTlsBlockGrease
 */
export interface TLTlsBlockGrease {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TlsBlock data2 = 1;
   */
  data2?: TlsBlock;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLTlsBlockPublicKey
 */
export interface TLTlsBlockPublicKey {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TlsBlock data2 = 1;
   */
  data2?: TlsBlock;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLTlsBlockScope
 */
export interface TLTlsBlockScope {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TlsBlock data2 = 1;
   */
  data2?: TlsBlock;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TlsClientHello
 */
export interface TlsClientHello {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.TlsBlock blocks = 3;
   */
  blocks: TlsBlock[];

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLTlsClientHello
 */
export interface TLTlsClientHello {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TlsClientHello data2 = 1;
   */
  data2?: TlsClientHello;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.HelpConfigSimple
 */
export interface HelpConfigSimple {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: optional int32 date = 3;
   */
  date?: number;

  /**
   * @generated from field: optional int32 expires = 4;
   */
  expires?: number;

  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.AccessPointRule rules = 5;
   */
  rules: AccessPointRule[];

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLHelpConfigSimple
 */
export interface TLHelpConfigSimple {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.HelpConfigSimple data2 = 1;
   */
  data2?: HelpConfigSimple;

}

