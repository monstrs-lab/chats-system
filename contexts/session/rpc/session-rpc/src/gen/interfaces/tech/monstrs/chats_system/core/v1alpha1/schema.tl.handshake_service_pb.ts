// @generated by protoc-gen-interfaces 0.0.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/core/v1alpha1/schema.tl.handshake_service.proto (package tech.monstrs.chats_system.core.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { TLConstructor } from "./schema.tl.crc32_pb.js";

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLReqPq
 */
export interface TLReqPq {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: optional bytes nonce = 3;
   */
  nonce?: Uint8Array;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLReqPqMulti
 */
export interface TLReqPqMulti {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: optional bytes nonce = 3;
   */
  nonce?: Uint8Array;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLReqDHParams
 */
export interface TLReqDHParams {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: optional bytes nonce = 3;
   */
  nonce?: Uint8Array;

  /**
   * @generated from field: optional bytes server_nonce = 4;
   */
  serverNonce?: Uint8Array;

  /**
   * @generated from field: optional string p = 5;
   */
  p?: string;

  /**
   * @generated from field: optional string q = 6;
   */
  q?: string;

  /**
   * @generated from field: optional int64 public_key_fingerprint = 7;
   */
  publicKeyFingerprint?: bigint;

  /**
   * @generated from field: optional string encrypted_data = 8;
   */
  encryptedData?: string;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLSetClientDHParams
 */
export interface TLSetClientDHParams {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: optional bytes nonce = 3;
   */
  nonce?: Uint8Array;

  /**
   * @generated from field: optional bytes server_nonce = 4;
   */
  serverNonce?: Uint8Array;

  /**
   * @generated from field: optional string encrypted_data = 5;
   */
  encryptedData?: string;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLDestroyAuthKey
 */
export interface TLDestroyAuthKey {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$?: TLConstructor;

}

