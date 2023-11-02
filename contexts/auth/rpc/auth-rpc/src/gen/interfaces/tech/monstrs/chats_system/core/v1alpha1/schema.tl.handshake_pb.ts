// @generated by protoc-gen-interfaces 0.0.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/core/v1alpha1/schema.tl.handshake.proto (package tech.monstrs.chats_system.core.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { TLConstructor } from './schema.tl.crc32_pb.js'

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.BindAuthKeyInner
 */
export interface BindAuthKeyInner {
  /**
   * @generated from field: string predicate_name = 1;
   */
  predicateName: string

  /**
   * @generated from field: tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: int64 nonce = 3;
   */
  nonce: bigint

  /**
   * @generated from field: int64 temp_auth_key_id = 4;
   */
  tempAuthKeyId: bigint

  /**
   * @generated from field: int64 perm_auth_key_id = 5;
   */
  permAuthKeyId: bigint

  /**
   * @generated from field: int64 temp_session_id = 6;
   */
  tempSessionId: bigint

  /**
   * @generated from field: int32 expires_at = 7;
   */
  expiresAt: number
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLBindAuthKeyInner
 */
export interface TLBindAuthKeyInner {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.BindAuthKeyInner data2 = 1;
   */
  data2: BindAuthKeyInner[]
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.ClientDHInnerData
 */
export interface ClientDHInnerData {
  /**
   * @generated from field: string predicate_name = 1;
   */
  predicateName: string

  /**
   * @generated from field: tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: bytes nonce = 3;
   */
  nonce: Uint8Array

  /**
   * @generated from field: bytes server_nonce = 4;
   */
  serverNonce: Uint8Array

  /**
   * @generated from field: int64 retry_id = 5;
   */
  retryId: bigint

  /**
   * @generated from field: string g_b = 6;
   */
  gB: string
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLClientDHInnerData
 */
export interface TLClientDHInnerData {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.ClientDHInnerData data2 = 1;
   */
  data2: ClientDHInnerData[]
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.DestroyAuthKeyRes
 */
export interface DestroyAuthKeyRes {
  /**
   * @generated from field: string predicate_name = 1;
   */
  predicateName: string

  /**
   * @generated from field: tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$: TLConstructor
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLDestroyAuthKeyOk
 */
export interface TLDestroyAuthKeyOk {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.DestroyAuthKeyRes data2 = 1;
   */
  data2: DestroyAuthKeyRes[]
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLDestroyAuthKeyNone
 */
export interface TLDestroyAuthKeyNone {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.DestroyAuthKeyRes data2 = 1;
   */
  data2: DestroyAuthKeyRes[]
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLDestroyAuthKeyFail
 */
export interface TLDestroyAuthKeyFail {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.DestroyAuthKeyRes data2 = 1;
   */
  data2: DestroyAuthKeyRes[]
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.PQInnerData
 */
export interface PQInnerData {
  /**
   * @generated from field: string predicate_name = 1;
   */
  predicateName: string

  /**
   * @generated from field: tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: string pq = 3;
   */
  pq: string

  /**
   * @generated from field: string p = 4;
   */
  p: string

  /**
   * @generated from field: string q = 5;
   */
  q: string

  /**
   * @generated from field: bytes nonce = 6;
   */
  nonce: Uint8Array

  /**
   * @generated from field: bytes server_nonce = 7;
   */
  serverNonce: Uint8Array

  /**
   * @generated from field: bytes new_nonce = 8;
   */
  newNonce: Uint8Array

  /**
   * @generated from field: int32 dc = 9;
   */
  dc: number

  /**
   * @generated from field: int32 expires_in = 10;
   */
  expiresIn: number
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLPQInnerData
 */
export interface TLPQInnerData {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.PQInnerData data2 = 1;
   */
  data2: PQInnerData[]
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLPQInnerDataDc
 */
export interface TLPQInnerDataDc {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.PQInnerData data2 = 1;
   */
  data2: PQInnerData[]
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLPQInnerDataTemp
 */
export interface TLPQInnerDataTemp {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.PQInnerData data2 = 1;
   */
  data2: PQInnerData[]
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLPQInnerDataTempDc
 */
export interface TLPQInnerDataTempDc {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.PQInnerData data2 = 1;
   */
  data2: PQInnerData[]
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.ResPQ
 */
export interface ResPQ {
  /**
   * @generated from field: string predicate_name = 1;
   */
  predicateName: string

  /**
   * @generated from field: tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: bytes nonce = 3;
   */
  nonce: Uint8Array

  /**
   * @generated from field: bytes server_nonce = 4;
   */
  serverNonce: Uint8Array

  /**
   * @generated from field: string pq = 5;
   */
  pq: string

  /**
   * @generated from field: int64 server_public_key_fingerprints = 6;
   */
  serverPublicKeyFingerprints: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLResPQ
 */
export interface TLResPQ {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.ResPQ data2 = 1;
   */
  data2: ResPQ[]
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.ServerDHParams
 */
export interface ServerDHParams {
  /**
   * @generated from field: string predicate_name = 1;
   */
  predicateName: string

  /**
   * @generated from field: tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: bytes nonce = 3;
   */
  nonce: Uint8Array

  /**
   * @generated from field: bytes server_nonce = 4;
   */
  serverNonce: Uint8Array

  /**
   * @generated from field: bytes new_nonce_hash = 5;
   */
  newNonceHash: Uint8Array

  /**
   * @generated from field: string encrypted_answer = 6;
   */
  encryptedAnswer: string
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLServerDHParamsFail
 */
export interface TLServerDHParamsFail {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.ServerDHParams data2 = 1;
   */
  data2: ServerDHParams[]
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLServerDHParamsOk
 */
export interface TLServerDHParamsOk {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.ServerDHParams data2 = 1;
   */
  data2: ServerDHParams[]
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.ServerDHInnerData
 */
export interface ServerDHInnerData {
  /**
   * @generated from field: string predicate_name = 1;
   */
  predicateName: string

  /**
   * @generated from field: tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: bytes nonce = 3;
   */
  nonce: Uint8Array

  /**
   * @generated from field: bytes server_nonce = 4;
   */
  serverNonce: Uint8Array

  /**
   * @generated from field: int32 g = 5;
   */
  g: number

  /**
   * @generated from field: string dh_prime = 6;
   */
  dhPrime: string

  /**
   * @generated from field: string g_a = 7;
   */
  gA: string

  /**
   * @generated from field: int32 server_time = 8;
   */
  serverTime: number
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLServerDHInnerData
 */
export interface TLServerDHInnerData {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.ServerDHInnerData data2 = 1;
   */
  data2: ServerDHInnerData[]
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.SetClientDHParamsAnswer
 */
export interface SetClientDHParamsAnswer {
  /**
   * @generated from field: string predicate_name = 1;
   */
  predicateName: string

  /**
   * @generated from field: tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$: TLConstructor

  /**
   * @generated from field: bytes nonce = 3;
   */
  nonce: Uint8Array

  /**
   * @generated from field: bytes server_nonce = 4;
   */
  serverNonce: Uint8Array

  /**
   * @generated from field: bytes new_nonce_hash1 = 5;
   */
  newNonceHash1: Uint8Array

  /**
   * @generated from field: bytes new_nonce_hash2 = 6;
   */
  newNonceHash2: Uint8Array

  /**
   * @generated from field: bytes new_nonce_hash3 = 7;
   */
  newNonceHash3: Uint8Array
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLDhGenOk
 */
export interface TLDhGenOk {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.SetClientDHParamsAnswer data2 = 1;
   */
  data2: SetClientDHParamsAnswer[]
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLDhGenRetry
 */
export interface TLDhGenRetry {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.SetClientDHParamsAnswer data2 = 1;
   */
  data2: SetClientDHParamsAnswer[]
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLDhGenFail
 */
export interface TLDhGenFail {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.core.v1alpha1.SetClientDHParamsAnswer data2 = 1;
   */
  data2: SetClientDHParamsAnswer[]
}
