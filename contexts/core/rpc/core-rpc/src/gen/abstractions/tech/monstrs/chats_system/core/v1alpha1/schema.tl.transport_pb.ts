// @generated by protoc-gen-abstractions 0.0.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/core/v1alpha1/schema.tl.transport.proto (package tech.monstrs.chats_system.core.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { TLConstructor } from './schema.tl.crc32_pb.js'

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.AccessPointRule
 */
export abstract class AccessPointRule {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  abstract readonly predicateName?: string

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: optional string phone_prefix_rules = 3;
   */
  abstract readonly phonePrefixRules?: string

  /**
   * @generated from field: optional int32 dc_id = 4;
   */
  abstract readonly dcId?: number

  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.IpPort ips = 5;
   */
  abstract readonly ips: IpPort[]
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLAccessPointRule
 */
export abstract class TLAccessPointRule {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.AccessPointRule data2 = 1;
   */
  abstract readonly data2?: AccessPointRule
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.BadMsgNotification
 */
export abstract class BadMsgNotification {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  abstract readonly predicateName?: string

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: optional int64 bad_msg_id = 3;
   */
  abstract readonly badMsgId?: bigint

  /**
   * @generated from field: optional int32 bad_msg_seqno = 4;
   */
  abstract readonly badMsgSeqno?: number

  /**
   * @generated from field: optional int32 error_code = 5;
   */
  abstract readonly errorCode?: number

  /**
   * @generated from field: optional int64 new_server_salt = 6;
   */
  abstract readonly newServerSalt?: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLBadMsgNotification
 */
export abstract class TLBadMsgNotification {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.BadMsgNotification data2 = 1;
   */
  abstract readonly data2?: BadMsgNotification
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLBadServerSalt
 */
export abstract class TLBadServerSalt {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.BadMsgNotification data2 = 1;
   */
  abstract readonly data2?: BadMsgNotification
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.DestroySessionRes
 */
export abstract class DestroySessionRes {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  abstract readonly predicateName?: string

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: optional int64 session_id = 3;
   */
  abstract readonly sessionId?: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLDestroySessionOk
 */
export abstract class TLDestroySessionOk {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.DestroySessionRes data2 = 1;
   */
  abstract readonly data2?: DestroySessionRes
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLDestroySessionNone
 */
export abstract class TLDestroySessionNone {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.DestroySessionRes data2 = 1;
   */
  abstract readonly data2?: DestroySessionRes
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.FutureSalt
 */
export abstract class FutureSalt {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  abstract readonly predicateName?: string

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: optional int32 valid_since = 3;
   */
  abstract readonly validSince?: number

  /**
   * @generated from field: optional int32 valid_until = 4;
   */
  abstract readonly validUntil?: number

  /**
   * @generated from field: optional int64 salt = 5;
   */
  abstract readonly salt?: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLFutureSalt
 */
export abstract class TLFutureSalt {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.FutureSalt data2 = 1;
   */
  abstract readonly data2?: FutureSalt
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.FutureSalts
 */
export abstract class FutureSalts {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  abstract readonly predicateName?: string

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: optional int64 req_msg_id = 3;
   */
  abstract readonly reqMsgId?: bigint

  /**
   * @generated from field: optional int32 now = 4;
   */
  abstract readonly now?: number

  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.TLFutureSalt salts = 5;
   */
  abstract readonly salts: TLFutureSalt[]
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLFutureSalts
 */
export abstract class TLFutureSalts {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.FutureSalts data2 = 1;
   */
  abstract readonly data2?: FutureSalts
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.HttpWait
 */
export abstract class HttpWait {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  abstract readonly predicateName?: string

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: optional int32 max_delay = 3;
   */
  abstract readonly maxDelay?: number

  /**
   * @generated from field: optional int32 wait_after = 4;
   */
  abstract readonly waitAfter?: number

  /**
   * @generated from field: optional int32 max_wait = 5;
   */
  abstract readonly maxWait?: number
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLHttpWait
 */
export abstract class TLHttpWait {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.HttpWait data2 = 1;
   */
  abstract readonly data2?: HttpWait
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.IpPort
 */
export abstract class IpPort {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  abstract readonly predicateName?: string

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: optional int32 ipv4 = 3;
   */
  abstract readonly ipv4?: number

  /**
   * @generated from field: optional int32 port = 4;
   */
  abstract readonly port?: number

  /**
   * @generated from field: optional bytes secret = 5;
   */
  abstract readonly secret?: Uint8Array
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLIpPort
 */
export abstract class TLIpPort {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.IpPort data2 = 1;
   */
  abstract readonly data2?: IpPort
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLIpPortSecret
 */
export abstract class TLIpPortSecret {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.IpPort data2 = 1;
   */
  abstract readonly data2?: IpPort
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.MsgDetailedInfo
 */
export abstract class MsgDetailedInfo {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  abstract readonly predicateName?: string

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: optional int64 msg_id = 3;
   */
  abstract readonly msgId?: bigint

  /**
   * @generated from field: optional int64 answer_msg_id = 4;
   */
  abstract readonly answerMsgId?: bigint

  /**
   * @generated from field: optional int32 bytes = 5;
   */
  abstract readonly bytes?: number

  /**
   * @generated from field: optional int32 status = 6;
   */
  abstract readonly status?: number
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLMsgDetailedInfo
 */
export abstract class TLMsgDetailedInfo {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.MsgDetailedInfo data2 = 1;
   */
  abstract readonly data2?: MsgDetailedInfo
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLMsgNewDetailedInfo
 */
export abstract class TLMsgNewDetailedInfo {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.MsgDetailedInfo data2 = 1;
   */
  abstract readonly data2?: MsgDetailedInfo
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.MsgResendReq
 */
export abstract class MsgResendReq {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  abstract readonly predicateName?: string

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: repeated int64 msg_ids = 3;
   */
  abstract readonly msgIds: bigint[]
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLMsgResendReq
 */
export abstract class TLMsgResendReq {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.MsgResendReq data2 = 1;
   */
  abstract readonly data2?: MsgResendReq
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.MsgsAck
 */
export abstract class MsgsAck {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  abstract readonly predicateName?: string

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: repeated int64 msg_ids = 3;
   */
  abstract readonly msgIds: bigint[]
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLMsgsAck
 */
export abstract class TLMsgsAck {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.MsgsAck data2 = 1;
   */
  abstract readonly data2?: MsgsAck
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.MsgsAllInfo
 */
export abstract class MsgsAllInfo {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  abstract readonly predicateName?: string

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: repeated int64 msg_ids = 3;
   */
  abstract readonly msgIds: bigint[]

  /**
   * @generated from field: optional string info = 4;
   */
  abstract readonly info?: string
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLMsgsAllInfo
 */
export abstract class TLMsgsAllInfo {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.MsgsAllInfo data2 = 1;
   */
  abstract readonly data2?: MsgsAllInfo
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.MsgsStateInfo
 */
export abstract class MsgsStateInfo {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  abstract readonly predicateName?: string

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: optional int64 req_msg_id = 3;
   */
  abstract readonly reqMsgId?: bigint

  /**
   * @generated from field: optional string info = 4;
   */
  abstract readonly info?: string
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLMsgsStateInfo
 */
export abstract class TLMsgsStateInfo {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.MsgsStateInfo data2 = 1;
   */
  abstract readonly data2?: MsgsStateInfo
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.MsgsStateReq
 */
export abstract class MsgsStateReq {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  abstract readonly predicateName?: string

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: repeated int64 msg_ids = 3;
   */
  abstract readonly msgIds: bigint[]
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLMsgsStateReq
 */
export abstract class TLMsgsStateReq {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.MsgsStateReq data2 = 1;
   */
  abstract readonly data2?: MsgsStateReq
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.NewSession
 */
export abstract class NewSession {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  abstract readonly predicateName?: string

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: optional int64 first_msg_id = 3;
   */
  abstract readonly firstMsgId?: bigint

  /**
   * @generated from field: optional int64 unique_id = 4;
   */
  abstract readonly uniqueId?: bigint

  /**
   * @generated from field: optional int64 server_salt = 5;
   */
  abstract readonly serverSalt?: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLNewSessionCreated
 */
export abstract class TLNewSessionCreated {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.NewSession data2 = 1;
   */
  abstract readonly data2?: NewSession
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.Pong
 */
export abstract class Pong {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  abstract readonly predicateName?: string

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: optional int64 msg_id = 3;
   */
  abstract readonly msgId?: bigint

  /**
   * @generated from field: optional int64 ping_id = 4;
   */
  abstract readonly pingId?: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLPong
 */
export abstract class TLPong {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.Pong data2 = 1;
   */
  abstract readonly data2?: Pong
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.RpcDropAnswer
 */
export abstract class RpcDropAnswer {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  abstract readonly predicateName?: string

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: optional int64 msg_id = 3;
   */
  abstract readonly msgId?: bigint

  /**
   * @generated from field: optional int32 seq_no = 4;
   */
  abstract readonly seqNo?: number

  /**
   * @generated from field: optional int32 bytes = 5;
   */
  abstract readonly bytes?: number
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLRpcAnswerUnknown
 */
export abstract class TLRpcAnswerUnknown {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.RpcDropAnswer data2 = 1;
   */
  abstract readonly data2?: RpcDropAnswer
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLRpcAnswerDroppedRunning
 */
export abstract class TLRpcAnswerDroppedRunning {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.RpcDropAnswer data2 = 1;
   */
  abstract readonly data2?: RpcDropAnswer
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLRpcAnswerDropped
 */
export abstract class TLRpcAnswerDropped {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.RpcDropAnswer data2 = 1;
   */
  abstract readonly data2?: RpcDropAnswer
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.RpcError
 */
export abstract class RpcError {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  abstract readonly predicateName?: string

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: optional int32 error_code = 3;
   */
  abstract readonly errorCode?: number

  /**
   * @generated from field: optional string error_message = 4;
   */
  abstract readonly errorMessage?: string
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLRpcError
 */
export abstract class TLRpcError {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.RpcError data2 = 1;
   */
  abstract readonly data2?: RpcError
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TlsBlock
 */
export abstract class TlsBlock {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  abstract readonly predicateName?: string

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: optional string data = 3;
   */
  abstract readonly data?: string

  /**
   * @generated from field: optional int32 length = 4;
   */
  abstract readonly length?: number

  /**
   * @generated from field: optional int32 seed = 5;
   */
  abstract readonly seed?: number

  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.TlsBlock entries = 6;
   */
  abstract readonly entries: TlsBlock[]
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLTlsBlockString
 */
export abstract class TLTlsBlockString {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TlsBlock data2 = 1;
   */
  abstract readonly data2?: TlsBlock
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLTlsBlockRandom
 */
export abstract class TLTlsBlockRandom {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TlsBlock data2 = 1;
   */
  abstract readonly data2?: TlsBlock
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLTlsBlockZero
 */
export abstract class TLTlsBlockZero {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TlsBlock data2 = 1;
   */
  abstract readonly data2?: TlsBlock
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLTlsBlockDomain
 */
export abstract class TLTlsBlockDomain {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TlsBlock data2 = 1;
   */
  abstract readonly data2?: TlsBlock
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLTlsBlockGrease
 */
export abstract class TLTlsBlockGrease {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TlsBlock data2 = 1;
   */
  abstract readonly data2?: TlsBlock
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLTlsBlockPublicKey
 */
export abstract class TLTlsBlockPublicKey {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TlsBlock data2 = 1;
   */
  abstract readonly data2?: TlsBlock
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLTlsBlockScope
 */
export abstract class TLTlsBlockScope {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TlsBlock data2 = 1;
   */
  abstract readonly data2?: TlsBlock
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TlsClientHello
 */
export abstract class TlsClientHello {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  abstract readonly predicateName?: string

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.TlsBlock blocks = 3;
   */
  abstract readonly blocks: TlsBlock[]
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLTlsClientHello
 */
export abstract class TLTlsClientHello {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TlsClientHello data2 = 1;
   */
  abstract readonly data2?: TlsClientHello
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.HelpConfigSimple
 */
export abstract class HelpConfigSimple {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  abstract readonly predicateName?: string

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  abstract readonly constructor$?: TLConstructor

  /**
   * @generated from field: optional int32 date = 3;
   */
  abstract readonly date?: number

  /**
   * @generated from field: optional int32 expires = 4;
   */
  abstract readonly expires?: number

  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.AccessPointRule rules = 5;
   */
  abstract readonly rules: AccessPointRule[]
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLHelpConfigSimple
 */
export abstract class TLHelpConfigSimple {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.HelpConfigSimple data2 = 1;
   */
  abstract readonly data2?: HelpConfigSimple
}
