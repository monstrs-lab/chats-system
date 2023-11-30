// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/idgen/v1alpha1/idgen.service.proto (package tech.monstrs.chats_system.idgen.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions }                                                                      from '@bufbuild/protobuf'

import type { FieldList }                                                           from '@bufbuild/protobuf'

import type { JsonReadOptions }                                          from '@bufbuild/protobuf'

import type { JsonValue }                               from '@bufbuild/protobuf'

import type { PartialMessage }               from '@bufbuild/protobuf'

import type { PlainMessage } from '@bufbuild/protobuf'

import { Message }                                                                                     from '@bufbuild/protobuf'

import { proto3 }                                                                             from '@bufbuild/protobuf'

import { protoInt64 }                                                                 from '@bufbuild/protobuf'

/**
 * @generated from enum tech.monstrs.chats_system.idgen.v1alpha1.InputIdType
 */
export enum InputIdType {
  /**
   * @generated from enum value: ID = 0;
   */
  ID = 0,

  /**
   * @generated from enum value: IDS = 1;
   */
  IDS = 1,

  /**
   * @generated from enum value: SEQ_ID = 2;
   */
  SEQ_ID = 2,

  /**
   * @generated from enum value: SEQ_IDS = 3;
   */
  SEQ_IDS = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(InputIdType)
proto3.util.setEnumType(InputIdType, 'tech.monstrs.chats_system.idgen.v1alpha1.InputIdType', [
  { no: 0, name: 'ID' },
  { no: 1, name: 'IDS' },
  { no: 2, name: 'SEQ_ID' },
  { no: 3, name: 'SEQ_IDS' },
])

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.IdValue
 */
export class IdValue extends Message<IdValue> {
  /**
   * @generated from field: int64 id = 1;
   */
  id = protoInt64.zero

  /**
   * @generated from field: repeated int64 ids = 2;
   */
  ids: bigint[] = []

  constructor(data?: PartialMessage<IdValue>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.idgen.v1alpha1.IdValue'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: 'ids', kind: 'scalar', T: 3 /* ScalarType.INT64 */, repeated: true },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdValue {
    return new IdValue().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdValue {
    return new IdValue().fromJson(jsonValue, options)
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdValue {
    return new IdValue().fromJsonString(jsonString, options)
  }

  static equals(
    a: IdValue | PlainMessage<IdValue> | undefined,
    b: IdValue | PlainMessage<IdValue> | undefined
  ): boolean {
    return proto3.util.equals(IdValue, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.InputId
 */
export class InputId extends Message<InputId> {
  /**
   * @generated from field: string key = 1;
   */
  key = ''

  /**
   * @generated from field: tech.monstrs.chats_system.idgen.v1alpha1.InputIdType type = 2;
   */
  type = InputIdType.ID

  /**
   * @generated from field: optional int32 num = 3;
   */
  num?: number

  /**
   * @generated from field: optional int32 n = 4;
   */
  n?: number

  constructor(data?: PartialMessage<InputId>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.idgen.v1alpha1.InputId'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'key', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'type', kind: 'enum', T: proto3.getEnumType(InputIdType) },
    { no: 3, name: 'num', kind: 'scalar', T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 4, name: 'n', kind: 'scalar', T: 5 /* ScalarType.INT32 */, opt: true },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InputId {
    return new InputId().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InputId {
    return new InputId().fromJson(jsonValue, options)
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InputId {
    return new InputId().fromJsonString(jsonString, options)
  }

  static equals(
    a: InputId | PlainMessage<InputId> | undefined,
    b: InputId | PlainMessage<InputId> | undefined
  ): boolean {
    return proto3.util.equals(InputId, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.GetNextIdRequest
 */
export class GetNextIdRequest extends Message<GetNextIdRequest> {
  constructor(data?: PartialMessage<GetNextIdRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.idgen.v1alpha1.GetNextIdRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetNextIdRequest {
    return new GetNextIdRequest().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetNextIdRequest {
    return new GetNextIdRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetNextIdRequest {
    return new GetNextIdRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetNextIdRequest | PlainMessage<GetNextIdRequest> | undefined,
    b: GetNextIdRequest | PlainMessage<GetNextIdRequest> | undefined
  ): boolean {
    return proto3.util.equals(GetNextIdRequest, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.GetNextIdResponse
 */
export class GetNextIdResponse extends Message<GetNextIdResponse> {
  /**
   * @generated from field: int64 next_id = 1;
   */
  nextId = protoInt64.zero

  constructor(data?: PartialMessage<GetNextIdResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.idgen.v1alpha1.GetNextIdResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'next_id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetNextIdResponse {
    return new GetNextIdResponse().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetNextIdResponse {
    return new GetNextIdResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetNextIdResponse {
    return new GetNextIdResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetNextIdResponse | PlainMessage<GetNextIdResponse> | undefined,
    b: GetNextIdResponse | PlainMessage<GetNextIdResponse> | undefined
  ): boolean {
    return proto3.util.equals(GetNextIdResponse, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.GetCurrentSeqIdRequest
 */
export class GetCurrentSeqIdRequest extends Message<GetCurrentSeqIdRequest> {
  /**
   * @generated from field: tech.monstrs.chats_system.idgen.v1alpha1.InputId id = 1;
   */
  id?: InputId

  constructor(data?: PartialMessage<GetCurrentSeqIdRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.idgen.v1alpha1.GetCurrentSeqIdRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'message', T: InputId },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetCurrentSeqIdRequest {
    return new GetCurrentSeqIdRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetCurrentSeqIdRequest {
    return new GetCurrentSeqIdRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetCurrentSeqIdRequest {
    return new GetCurrentSeqIdRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetCurrentSeqIdRequest | PlainMessage<GetCurrentSeqIdRequest> | undefined,
    b: GetCurrentSeqIdRequest | PlainMessage<GetCurrentSeqIdRequest> | undefined
  ): boolean {
    return proto3.util.equals(GetCurrentSeqIdRequest, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.GetCurrentSeqIdResponse
 */
export class GetCurrentSeqIdResponse extends Message<GetCurrentSeqIdResponse> {
  /**
   * @generated from field: int64 seq_id = 1;
   */
  seqId = protoInt64.zero

  constructor(data?: PartialMessage<GetCurrentSeqIdResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.idgen.v1alpha1.GetCurrentSeqIdResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'seq_id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetCurrentSeqIdResponse {
    return new GetCurrentSeqIdResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetCurrentSeqIdResponse {
    return new GetCurrentSeqIdResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetCurrentSeqIdResponse {
    return new GetCurrentSeqIdResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetCurrentSeqIdResponse | PlainMessage<GetCurrentSeqIdResponse> | undefined,
    b: GetCurrentSeqIdResponse | PlainMessage<GetCurrentSeqIdResponse> | undefined
  ): boolean {
    return proto3.util.equals(GetCurrentSeqIdResponse, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.SetCurrentSeqIdRequest
 */
export class SetCurrentSeqIdRequest extends Message<SetCurrentSeqIdRequest> {
  /**
   * @generated from field: string key = 1;
   */
  key = ''

  /**
   * @generated from field: int64 id = 2;
   */
  id = protoInt64.zero

  constructor(data?: PartialMessage<SetCurrentSeqIdRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.idgen.v1alpha1.SetCurrentSeqIdRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'key', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): SetCurrentSeqIdRequest {
    return new SetCurrentSeqIdRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): SetCurrentSeqIdRequest {
    return new SetCurrentSeqIdRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): SetCurrentSeqIdRequest {
    return new SetCurrentSeqIdRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: SetCurrentSeqIdRequest | PlainMessage<SetCurrentSeqIdRequest> | undefined,
    b: SetCurrentSeqIdRequest | PlainMessage<SetCurrentSeqIdRequest> | undefined
  ): boolean {
    return proto3.util.equals(SetCurrentSeqIdRequest, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.SetCurrentSeqIdResponse
 */
export class SetCurrentSeqIdResponse extends Message<SetCurrentSeqIdResponse> {
  /**
   * @generated from field: bool success = 1;
   */
  success = false

  constructor(data?: PartialMessage<SetCurrentSeqIdResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.idgen.v1alpha1.SetCurrentSeqIdResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'success', kind: 'scalar', T: 8 /* ScalarType.BOOL */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): SetCurrentSeqIdResponse {
    return new SetCurrentSeqIdResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): SetCurrentSeqIdResponse {
    return new SetCurrentSeqIdResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): SetCurrentSeqIdResponse {
    return new SetCurrentSeqIdResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: SetCurrentSeqIdResponse | PlainMessage<SetCurrentSeqIdResponse> | undefined,
    b: SetCurrentSeqIdResponse | PlainMessage<SetCurrentSeqIdResponse> | undefined
  ): boolean {
    return proto3.util.equals(SetCurrentSeqIdResponse, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.GetNextSeqIdRequest
 */
export class GetNextSeqIdRequest extends Message<GetNextSeqIdRequest> {
  /**
   * @generated from field: string key = 1;
   */
  key = ''

  constructor(data?: PartialMessage<GetNextSeqIdRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.idgen.v1alpha1.GetNextSeqIdRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'key', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetNextSeqIdRequest {
    return new GetNextSeqIdRequest().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetNextSeqIdRequest {
    return new GetNextSeqIdRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetNextSeqIdRequest {
    return new GetNextSeqIdRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetNextSeqIdRequest | PlainMessage<GetNextSeqIdRequest> | undefined,
    b: GetNextSeqIdRequest | PlainMessage<GetNextSeqIdRequest> | undefined
  ): boolean {
    return proto3.util.equals(GetNextSeqIdRequest, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.GetNextSeqIdResponse
 */
export class GetNextSeqIdResponse extends Message<GetNextSeqIdResponse> {
  /**
   * @generated from field: int64 seq_id = 1;
   */
  seqId = protoInt64.zero

  constructor(data?: PartialMessage<GetNextSeqIdResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.idgen.v1alpha1.GetNextSeqIdResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'seq_id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetNextSeqIdResponse {
    return new GetNextSeqIdResponse().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetNextSeqIdResponse {
    return new GetNextSeqIdResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetNextSeqIdResponse {
    return new GetNextSeqIdResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetNextSeqIdResponse | PlainMessage<GetNextSeqIdResponse> | undefined,
    b: GetNextSeqIdResponse | PlainMessage<GetNextSeqIdResponse> | undefined
  ): boolean {
    return proto3.util.equals(GetNextSeqIdResponse, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.GetNextIdValuesRequest
 */
export class GetNextIdValuesRequest extends Message<GetNextIdValuesRequest> {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.idgen.v1alpha1.InputId input_ids = 1;
   */
  inputIds: InputId[] = []

  constructor(data?: PartialMessage<GetNextIdValuesRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.idgen.v1alpha1.GetNextIdValuesRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'input_ids', kind: 'message', T: InputId, repeated: true },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetNextIdValuesRequest {
    return new GetNextIdValuesRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetNextIdValuesRequest {
    return new GetNextIdValuesRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetNextIdValuesRequest {
    return new GetNextIdValuesRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetNextIdValuesRequest | PlainMessage<GetNextIdValuesRequest> | undefined,
    b: GetNextIdValuesRequest | PlainMessage<GetNextIdValuesRequest> | undefined
  ): boolean {
    return proto3.util.equals(GetNextIdValuesRequest, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.GetNextIdValuesResponse
 */
export class GetNextIdValuesResponse extends Message<GetNextIdValuesResponse> {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.idgen.v1alpha1.IdValue id_values = 1;
   */
  idValues: IdValue[] = []

  constructor(data?: PartialMessage<GetNextIdValuesResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.idgen.v1alpha1.GetNextIdValuesResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id_values', kind: 'message', T: IdValue, repeated: true },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetNextIdValuesResponse {
    return new GetNextIdValuesResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetNextIdValuesResponse {
    return new GetNextIdValuesResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetNextIdValuesResponse {
    return new GetNextIdValuesResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetNextIdValuesResponse | PlainMessage<GetNextIdValuesResponse> | undefined,
    b: GetNextIdValuesResponse | PlainMessage<GetNextIdValuesResponse> | undefined
  ): boolean {
    return proto3.util.equals(GetNextIdValuesResponse, a, b)
  }
}
