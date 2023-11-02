// @generated by protoc-gen-es v1.4.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/core/v1alpha1/schema.tl.core_types.proto (package tech.monstrs.chats_system.core.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { TLConstructor } from "./schema.tl.crc32_pb.js";

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.Bool
 */
export class Bool extends Message<Bool> {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  constructor(data?: PartialMessage<Bool>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tech.monstrs.chats_system.core.v1alpha1.Bool";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "predicate_name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "constructor", kind: "enum", T: proto3.getEnumType(TLConstructor), opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Bool {
    return new Bool().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Bool {
    return new Bool().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Bool {
    return new Bool().fromJsonString(jsonString, options);
  }

  static equals(a: Bool | PlainMessage<Bool> | undefined, b: Bool | PlainMessage<Bool> | undefined): boolean {
    return proto3.util.equals(Bool, a, b);
  }
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLBoolFalse
 */
export class TLBoolFalse extends Message<TLBoolFalse> {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.Bool data2 = 1;
   */
  data2?: Bool;

  constructor(data?: PartialMessage<TLBoolFalse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tech.monstrs.chats_system.core.v1alpha1.TLBoolFalse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data2", kind: "message", T: Bool, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TLBoolFalse {
    return new TLBoolFalse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TLBoolFalse {
    return new TLBoolFalse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TLBoolFalse {
    return new TLBoolFalse().fromJsonString(jsonString, options);
  }

  static equals(a: TLBoolFalse | PlainMessage<TLBoolFalse> | undefined, b: TLBoolFalse | PlainMessage<TLBoolFalse> | undefined): boolean {
    return proto3.util.equals(TLBoolFalse, a, b);
  }
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLBoolTrue
 */
export class TLBoolTrue extends Message<TLBoolTrue> {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.Bool data2 = 1;
   */
  data2?: Bool;

  constructor(data?: PartialMessage<TLBoolTrue>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tech.monstrs.chats_system.core.v1alpha1.TLBoolTrue";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data2", kind: "message", T: Bool, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TLBoolTrue {
    return new TLBoolTrue().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TLBoolTrue {
    return new TLBoolTrue().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TLBoolTrue {
    return new TLBoolTrue().fromJsonString(jsonString, options);
  }

  static equals(a: TLBoolTrue | PlainMessage<TLBoolTrue> | undefined, b: TLBoolTrue | PlainMessage<TLBoolTrue> | undefined): boolean {
    return proto3.util.equals(TLBoolTrue, a, b);
  }
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.Double
 */
export class Double extends Message<Double> {
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

  constructor(data?: PartialMessage<Double>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tech.monstrs.chats_system.core.v1alpha1.Double";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "predicate_name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "constructor", kind: "enum", T: proto3.getEnumType(TLConstructor), opt: true },
    { no: 3, name: "v", kind: "scalar", T: 2 /* ScalarType.FLOAT */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Double {
    return new Double().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Double {
    return new Double().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Double {
    return new Double().fromJsonString(jsonString, options);
  }

  static equals(a: Double | PlainMessage<Double> | undefined, b: Double | PlainMessage<Double> | undefined): boolean {
    return proto3.util.equals(Double, a, b);
  }
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLDouble
 */
export class TLDouble extends Message<TLDouble> {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.Double data2 = 1;
   */
  data2?: Double;

  constructor(data?: PartialMessage<TLDouble>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tech.monstrs.chats_system.core.v1alpha1.TLDouble";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data2", kind: "message", T: Double, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TLDouble {
    return new TLDouble().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TLDouble {
    return new TLDouble().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TLDouble {
    return new TLDouble().fromJsonString(jsonString, options);
  }

  static equals(a: TLDouble | PlainMessage<TLDouble> | undefined, b: TLDouble | PlainMessage<TLDouble> | undefined): boolean {
    return proto3.util.equals(TLDouble, a, b);
  }
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.Error
 */
export class Error extends Message<Error> {
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

  constructor(data?: PartialMessage<Error>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tech.monstrs.chats_system.core.v1alpha1.Error";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "predicate_name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "constructor", kind: "enum", T: proto3.getEnumType(TLConstructor), opt: true },
    { no: 3, name: "code", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 4, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Error {
    return new Error().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Error {
    return new Error().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Error {
    return new Error().fromJsonString(jsonString, options);
  }

  static equals(a: Error | PlainMessage<Error> | undefined, b: Error | PlainMessage<Error> | undefined): boolean {
    return proto3.util.equals(Error, a, b);
  }
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLError
 */
export class TLError extends Message<TLError> {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.Error data2 = 1;
   */
  data2?: Error;

  constructor(data?: PartialMessage<TLError>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tech.monstrs.chats_system.core.v1alpha1.TLError";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data2", kind: "message", T: Error, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TLError {
    return new TLError().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TLError {
    return new TLError().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TLError {
    return new TLError().fromJsonString(jsonString, options);
  }

  static equals(a: TLError | PlainMessage<TLError> | undefined, b: TLError | PlainMessage<TLError> | undefined): boolean {
    return proto3.util.equals(TLError, a, b);
  }
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.Int32
 */
export class Int32 extends Message<Int32> {
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

  constructor(data?: PartialMessage<Int32>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tech.monstrs.chats_system.core.v1alpha1.Int32";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "predicate_name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "constructor", kind: "enum", T: proto3.getEnumType(TLConstructor), opt: true },
    { no: 3, name: "v", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Int32 {
    return new Int32().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Int32 {
    return new Int32().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Int32 {
    return new Int32().fromJsonString(jsonString, options);
  }

  static equals(a: Int32 | PlainMessage<Int32> | undefined, b: Int32 | PlainMessage<Int32> | undefined): boolean {
    return proto3.util.equals(Int32, a, b);
  }
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLInt32
 */
export class TLInt32 extends Message<TLInt32> {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.Int32 data2 = 1;
   */
  data2?: Int32;

  constructor(data?: PartialMessage<TLInt32>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tech.monstrs.chats_system.core.v1alpha1.TLInt32";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data2", kind: "message", T: Int32, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TLInt32 {
    return new TLInt32().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TLInt32 {
    return new TLInt32().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TLInt32 {
    return new TLInt32().fromJsonString(jsonString, options);
  }

  static equals(a: TLInt32 | PlainMessage<TLInt32> | undefined, b: TLInt32 | PlainMessage<TLInt32> | undefined): boolean {
    return proto3.util.equals(TLInt32, a, b);
  }
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.Int64
 */
export class Int64 extends Message<Int64> {
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

  constructor(data?: PartialMessage<Int64>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tech.monstrs.chats_system.core.v1alpha1.Int64";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "predicate_name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "constructor", kind: "enum", T: proto3.getEnumType(TLConstructor), opt: true },
    { no: 3, name: "v", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Int64 {
    return new Int64().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Int64 {
    return new Int64().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Int64 {
    return new Int64().fromJsonString(jsonString, options);
  }

  static equals(a: Int64 | PlainMessage<Int64> | undefined, b: Int64 | PlainMessage<Int64> | undefined): boolean {
    return proto3.util.equals(Int64, a, b);
  }
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLLong
 */
export class TLLong extends Message<TLLong> {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.Int64 data2 = 1;
   */
  data2?: Int64;

  constructor(data?: PartialMessage<TLLong>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tech.monstrs.chats_system.core.v1alpha1.TLLong";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data2", kind: "message", T: Int64, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TLLong {
    return new TLLong().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TLLong {
    return new TLLong().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TLLong {
    return new TLLong().fromJsonString(jsonString, options);
  }

  static equals(a: TLLong | PlainMessage<TLLong> | undefined, b: TLLong | PlainMessage<TLLong> | undefined): boolean {
    return proto3.util.equals(TLLong, a, b);
  }
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLInt64
 */
export class TLInt64 extends Message<TLInt64> {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.Int64 data2 = 1;
   */
  data2?: Int64;

  constructor(data?: PartialMessage<TLInt64>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tech.monstrs.chats_system.core.v1alpha1.TLInt64";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data2", kind: "message", T: Int64, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TLInt64 {
    return new TLInt64().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TLInt64 {
    return new TLInt64().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TLInt64 {
    return new TLInt64().fromJsonString(jsonString, options);
  }

  static equals(a: TLInt64 | PlainMessage<TLInt64> | undefined, b: TLInt64 | PlainMessage<TLInt64> | undefined): boolean {
    return proto3.util.equals(TLInt64, a, b);
  }
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.Null
 */
export class Null extends Message<Null> {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  constructor(data?: PartialMessage<Null>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tech.monstrs.chats_system.core.v1alpha1.Null";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "predicate_name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "constructor", kind: "enum", T: proto3.getEnumType(TLConstructor), opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Null {
    return new Null().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Null {
    return new Null().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Null {
    return new Null().fromJsonString(jsonString, options);
  }

  static equals(a: Null | PlainMessage<Null> | undefined, b: Null | PlainMessage<Null> | undefined): boolean {
    return proto3.util.equals(Null, a, b);
  }
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLNull
 */
export class TLNull extends Message<TLNull> {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.Null data2 = 1;
   */
  data2?: Null;

  constructor(data?: PartialMessage<TLNull>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tech.monstrs.chats_system.core.v1alpha1.TLNull";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data2", kind: "message", T: Null, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TLNull {
    return new TLNull().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TLNull {
    return new TLNull().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TLNull {
    return new TLNull().fromJsonString(jsonString, options);
  }

  static equals(a: TLNull | PlainMessage<TLNull> | undefined, b: TLNull | PlainMessage<TLNull> | undefined): boolean {
    return proto3.util.equals(TLNull, a, b);
  }
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.String
 */
export class String extends Message<String> {
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

  constructor(data?: PartialMessage<String>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tech.monstrs.chats_system.core.v1alpha1.String";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "predicate_name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "constructor", kind: "enum", T: proto3.getEnumType(TLConstructor), opt: true },
    { no: 3, name: "v", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): String {
    return new String().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): String {
    return new String().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): String {
    return new String().fromJsonString(jsonString, options);
  }

  static equals(a: String | PlainMessage<String> | undefined, b: String | PlainMessage<String> | undefined): boolean {
    return proto3.util.equals(String, a, b);
  }
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLString
 */
export class TLString extends Message<TLString> {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.String data2 = 1;
   */
  data2?: String;

  constructor(data?: PartialMessage<TLString>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tech.monstrs.chats_system.core.v1alpha1.TLString";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data2", kind: "message", T: String, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TLString {
    return new TLString().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TLString {
    return new TLString().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TLString {
    return new TLString().fromJsonString(jsonString, options);
  }

  static equals(a: TLString | PlainMessage<TLString> | undefined, b: TLString | PlainMessage<TLString> | undefined): boolean {
    return proto3.util.equals(TLString, a, b);
  }
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.True
 */
export class True extends Message<True> {
  /**
   * @generated from field: optional string predicate_name = 1;
   */
  predicateName?: string;

  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.TLConstructor constructor = 2;
   */
  constructor$?: TLConstructor;

  constructor(data?: PartialMessage<True>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tech.monstrs.chats_system.core.v1alpha1.True";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "predicate_name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "constructor", kind: "enum", T: proto3.getEnumType(TLConstructor), opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): True {
    return new True().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): True {
    return new True().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): True {
    return new True().fromJsonString(jsonString, options);
  }

  static equals(a: True | PlainMessage<True> | undefined, b: True | PlainMessage<True> | undefined): boolean {
    return proto3.util.equals(True, a, b);
  }
}

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.TLTrue
 */
export class TLTrue extends Message<TLTrue> {
  /**
   * @generated from field: optional tech.monstrs.chats_system.core.v1alpha1.True data2 = 1;
   */
  data2?: True;

  constructor(data?: PartialMessage<TLTrue>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tech.monstrs.chats_system.core.v1alpha1.TLTrue";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data2", kind: "message", T: True, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TLTrue {
    return new TLTrue().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TLTrue {
    return new TLTrue().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TLTrue {
    return new TLTrue().fromJsonString(jsonString, options);
  }

  static equals(a: TLTrue | PlainMessage<TLTrue> | undefined, b: TLTrue | PlainMessage<TLTrue> | undefined): boolean {
    return proto3.util.equals(TLTrue, a, b);
  }
}

