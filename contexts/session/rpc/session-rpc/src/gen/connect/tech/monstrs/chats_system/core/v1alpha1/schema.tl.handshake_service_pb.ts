// @generated by protoc-gen-es v1.4.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/core/v1alpha1/schema.tl.handshake_service.proto (package tech.monstrs.chats_system.core.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { TLConstructor } from "./schema.tl.crc32_pb.js";

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLReqPq
 */
export class TLReqPq extends Message<TLReqPq> {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: optional bytes nonce = 3;
   */
  nonce?: Uint8Array;

  constructor(data?: PartialMessage<TLReqPq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tech.monstrs.chats_system.core.v1alpha1.TLReqPq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "constructor", kind: "enum", T: proto3.getEnumType(TLConstructor), opt: true },
    { no: 3, name: "nonce", kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TLReqPq {
    return new TLReqPq().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TLReqPq {
    return new TLReqPq().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TLReqPq {
    return new TLReqPq().fromJsonString(jsonString, options);
  }

  static equals(a: TLReqPq | PlainMessage<TLReqPq> | undefined, b: TLReqPq | PlainMessage<TLReqPq> | undefined): boolean {
    return proto3.util.equals(TLReqPq, a, b);
  }
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLReqPqMulti
 */
export class TLReqPqMulti extends Message<TLReqPqMulti> {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$?: TLConstructor;

  /**
   * @generated from field: optional bytes nonce = 3;
   */
  nonce?: Uint8Array;

  constructor(data?: PartialMessage<TLReqPqMulti>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tech.monstrs.chats_system.core.v1alpha1.TLReqPqMulti";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "constructor", kind: "enum", T: proto3.getEnumType(TLConstructor), opt: true },
    { no: 3, name: "nonce", kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TLReqPqMulti {
    return new TLReqPqMulti().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TLReqPqMulti {
    return new TLReqPqMulti().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TLReqPqMulti {
    return new TLReqPqMulti().fromJsonString(jsonString, options);
  }

  static equals(a: TLReqPqMulti | PlainMessage<TLReqPqMulti> | undefined, b: TLReqPqMulti | PlainMessage<TLReqPqMulti> | undefined): boolean {
    return proto3.util.equals(TLReqPqMulti, a, b);
  }
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLReqDHParams
 */
export class TLReqDHParams extends Message<TLReqDHParams> {
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

  constructor(data?: PartialMessage<TLReqDHParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tech.monstrs.chats_system.core.v1alpha1.TLReqDHParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "constructor", kind: "enum", T: proto3.getEnumType(TLConstructor), opt: true },
    { no: 3, name: "nonce", kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true },
    { no: 4, name: "server_nonce", kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true },
    { no: 5, name: "p", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 6, name: "q", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 7, name: "public_key_fingerprint", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
    { no: 8, name: "encrypted_data", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TLReqDHParams {
    return new TLReqDHParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TLReqDHParams {
    return new TLReqDHParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TLReqDHParams {
    return new TLReqDHParams().fromJsonString(jsonString, options);
  }

  static equals(a: TLReqDHParams | PlainMessage<TLReqDHParams> | undefined, b: TLReqDHParams | PlainMessage<TLReqDHParams> | undefined): boolean {
    return proto3.util.equals(TLReqDHParams, a, b);
  }
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLSetClientDHParams
 */
export class TLSetClientDHParams extends Message<TLSetClientDHParams> {
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

  constructor(data?: PartialMessage<TLSetClientDHParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tech.monstrs.chats_system.core.v1alpha1.TLSetClientDHParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "constructor", kind: "enum", T: proto3.getEnumType(TLConstructor), opt: true },
    { no: 3, name: "nonce", kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true },
    { no: 4, name: "server_nonce", kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true },
    { no: 5, name: "encrypted_data", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TLSetClientDHParams {
    return new TLSetClientDHParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TLSetClientDHParams {
    return new TLSetClientDHParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TLSetClientDHParams {
    return new TLSetClientDHParams().fromJsonString(jsonString, options);
  }

  static equals(a: TLSetClientDHParams | PlainMessage<TLSetClientDHParams> | undefined, b: TLSetClientDHParams | PlainMessage<TLSetClientDHParams> | undefined): boolean {
    return proto3.util.equals(TLSetClientDHParams, a, b);
  }
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLDestroyAuthKey
 */
export class TLDestroyAuthKey extends Message<TLDestroyAuthKey> {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 1;
   */
  constructor$?: TLConstructor;

  constructor(data?: PartialMessage<TLDestroyAuthKey>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tech.monstrs.chats_system.core.v1alpha1.TLDestroyAuthKey";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "constructor", kind: "enum", T: proto3.getEnumType(TLConstructor), opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TLDestroyAuthKey {
    return new TLDestroyAuthKey().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TLDestroyAuthKey {
    return new TLDestroyAuthKey().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TLDestroyAuthKey {
    return new TLDestroyAuthKey().fromJsonString(jsonString, options);
  }

  static equals(a: TLDestroyAuthKey | PlainMessage<TLDestroyAuthKey> | undefined, b: TLDestroyAuthKey | PlainMessage<TLDestroyAuthKey> | undefined): boolean {
    return proto3.util.equals(TLDestroyAuthKey, a, b);
  }
}

