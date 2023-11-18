// @generated by protoc-gen-interfaces 0.0.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/core/v1alpha1/schema.tl.core_types.proto (package tech.monstrs.chats_system.core.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { TLConstructor } from "./schema.tl.crc32_pb.js";

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.Bool
 */
export interface Bool {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLBoolFalse
 */
export interface TLBoolFalse {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.Bool data2 = 1;
   */
  data2?: Bool;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLBoolTrue
 */
export interface TLBoolTrue {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.Bool data2 = 1;
   */
  data2?: Bool;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.Double
 */
export interface Double {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: optional float v = 3;
   */
  v?: number;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLDouble
 */
export interface TLDouble {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.Double data2 = 1;
   */
  data2?: Double;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.Error
 */
export interface Error {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: optional int32 code = 3;
   */
  code?: number;

  /**
   * @generated from field: optional string text = 4;
   */
  text?: string;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLError
 */
export interface TLError {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.Error data2 = 1;
   */
  data2?: Error;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.Int32
 */
export interface Int32 {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: optional int32 v = 3;
   */
  v?: number;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLInt32
 */
export interface TLInt32 {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.Int32 data2 = 1;
   */
  data2?: Int32;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.Int64
 */
export interface Int64 {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: optional int64 v = 3;
   */
  v?: bigint;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLLong
 */
export interface TLLong {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.Int64 data2 = 1;
   */
  data2?: Int64;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLInt64
 */
export interface TLInt64 {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.Int64 data2 = 1;
   */
  data2?: Int64;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.Null
 */
export interface Null {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLNull
 */
export interface TLNull {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.Null data2 = 1;
   */
  data2?: Null;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.String
 */
export interface String {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: optional string v = 3;
   */
  v?: string;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLString
 */
export interface TLString {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.String data2 = 1;
   */
  data2?: String;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.True
 */
export interface True {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLTrue
 */
export interface TLTrue {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.True data2 = 1;
   */
  data2?: True;

}

