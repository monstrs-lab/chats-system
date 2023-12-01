// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/idgen/v1alpha1/idgen.service.proto (package tech.monstrs.chats_system.idgen.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions } from '@bufbuild/protobuf'
import type { FieldList }         from '@bufbuild/protobuf'
import type { JsonReadOptions }   from '@bufbuild/protobuf'
import type { JsonValue }         from '@bufbuild/protobuf'
import type { PartialMessage }    from '@bufbuild/protobuf'
import type { PlainMessage }      from '@bufbuild/protobuf'

import { Message }                from '@bufbuild/protobuf'
import { proto3 }                 from '@bufbuild/protobuf'
import { protoInt64 }             from '@bufbuild/protobuf'

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.Sequence
 */
export class Sequence extends Message<Sequence> {
  /**
   * @generated from field: string key = 1;
   */
  key = ''

  /**
   * @generated from field: int64 id = 2;
   */
  id = protoInt64.zero

  constructor(data?: PartialMessage<Sequence>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.idgen.v1alpha1.Sequence'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'key', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Sequence {
    return new Sequence().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Sequence {
    return new Sequence().fromJson(jsonValue, options)
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Sequence {
    return new Sequence().fromJsonString(jsonString, options)
  }

  static equals(
    a: Sequence | PlainMessage<Sequence> | undefined,
    b: Sequence | PlainMessage<Sequence> | undefined
  ): boolean {
    return proto3.util.equals(Sequence, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.SequenceQuery
 */
export class SequenceQuery extends Message<SequenceQuery> {
  /**
   * @generated from field: string key = 1;
   */
  key = ''

  /**
   * @generated from field: optional int32 increment = 2;
   */
  increment?: number

  constructor(data?: PartialMessage<SequenceQuery>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.idgen.v1alpha1.SequenceQuery'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'key', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'increment', kind: 'scalar', T: 5 /* ScalarType.INT32 */, opt: true },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SequenceQuery {
    return new SequenceQuery().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SequenceQuery {
    return new SequenceQuery().fromJson(jsonValue, options)
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SequenceQuery {
    return new SequenceQuery().fromJsonString(jsonString, options)
  }

  static equals(
    a: SequenceQuery | PlainMessage<SequenceQuery> | undefined,
    b: SequenceQuery | PlainMessage<SequenceQuery> | undefined
  ): boolean {
    return proto3.util.equals(SequenceQuery, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.SetCurrentSequenceIdRequest
 */
export class SetCurrentSequenceIdRequest extends Message<SetCurrentSequenceIdRequest> {
  /**
   * @generated from field: string key = 1;
   */
  key = ''

  /**
   * @generated from field: int64 id = 2;
   */
  id = protoInt64.zero

  constructor(data?: PartialMessage<SetCurrentSequenceIdRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.idgen.v1alpha1.SetCurrentSequenceIdRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'key', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): SetCurrentSequenceIdRequest {
    return new SetCurrentSequenceIdRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): SetCurrentSequenceIdRequest {
    return new SetCurrentSequenceIdRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): SetCurrentSequenceIdRequest {
    return new SetCurrentSequenceIdRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: SetCurrentSequenceIdRequest | PlainMessage<SetCurrentSequenceIdRequest> | undefined,
    b: SetCurrentSequenceIdRequest | PlainMessage<SetCurrentSequenceIdRequest> | undefined
  ): boolean {
    return proto3.util.equals(SetCurrentSequenceIdRequest, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.SetCurrentSequenceIdResponse
 */
export class SetCurrentSequenceIdResponse extends Message<SetCurrentSequenceIdResponse> {
  /**
   * @generated from field: bool success = 1;
   */
  success = false

  constructor(data?: PartialMessage<SetCurrentSequenceIdResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.idgen.v1alpha1.SetCurrentSequenceIdResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'success', kind: 'scalar', T: 8 /* ScalarType.BOOL */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): SetCurrentSequenceIdResponse {
    return new SetCurrentSequenceIdResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): SetCurrentSequenceIdResponse {
    return new SetCurrentSequenceIdResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): SetCurrentSequenceIdResponse {
    return new SetCurrentSequenceIdResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: SetCurrentSequenceIdResponse | PlainMessage<SetCurrentSequenceIdResponse> | undefined,
    b: SetCurrentSequenceIdResponse | PlainMessage<SetCurrentSequenceIdResponse> | undefined
  ): boolean {
    return proto3.util.equals(SetCurrentSequenceIdResponse, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.GetCurrentSequenceIdRequest
 */
export class GetCurrentSequenceIdRequest extends Message<GetCurrentSequenceIdRequest> {
  /**
   * @generated from field: tech.monstrs.chats_system.idgen.v1alpha1.SequenceQuery query = 1;
   */
  query?: SequenceQuery

  constructor(data?: PartialMessage<GetCurrentSequenceIdRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.idgen.v1alpha1.GetCurrentSequenceIdRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'query', kind: 'message', T: SequenceQuery },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetCurrentSequenceIdRequest {
    return new GetCurrentSequenceIdRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetCurrentSequenceIdRequest {
    return new GetCurrentSequenceIdRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetCurrentSequenceIdRequest {
    return new GetCurrentSequenceIdRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetCurrentSequenceIdRequest | PlainMessage<GetCurrentSequenceIdRequest> | undefined,
    b: GetCurrentSequenceIdRequest | PlainMessage<GetCurrentSequenceIdRequest> | undefined
  ): boolean {
    return proto3.util.equals(GetCurrentSequenceIdRequest, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.GetCurrentSequenceIdResponse
 */
export class GetCurrentSequenceIdResponse extends Message<GetCurrentSequenceIdResponse> {
  /**
   * @generated from field: tech.monstrs.chats_system.idgen.v1alpha1.Sequence sequence = 1;
   */
  sequence?: Sequence

  constructor(data?: PartialMessage<GetCurrentSequenceIdResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.idgen.v1alpha1.GetCurrentSequenceIdResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'sequence', kind: 'message', T: Sequence },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetCurrentSequenceIdResponse {
    return new GetCurrentSequenceIdResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetCurrentSequenceIdResponse {
    return new GetCurrentSequenceIdResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetCurrentSequenceIdResponse {
    return new GetCurrentSequenceIdResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetCurrentSequenceIdResponse | PlainMessage<GetCurrentSequenceIdResponse> | undefined,
    b: GetCurrentSequenceIdResponse | PlainMessage<GetCurrentSequenceIdResponse> | undefined
  ): boolean {
    return proto3.util.equals(GetCurrentSequenceIdResponse, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.GetCurrentSequenceIdsRequest
 */
export class GetCurrentSequenceIdsRequest extends Message<GetCurrentSequenceIdsRequest> {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.idgen.v1alpha1.SequenceQuery queries = 1;
   */
  queries: SequenceQuery[] = []

  constructor(data?: PartialMessage<GetCurrentSequenceIdsRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.idgen.v1alpha1.GetCurrentSequenceIdsRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'queries', kind: 'message', T: SequenceQuery, repeated: true },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetCurrentSequenceIdsRequest {
    return new GetCurrentSequenceIdsRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetCurrentSequenceIdsRequest {
    return new GetCurrentSequenceIdsRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetCurrentSequenceIdsRequest {
    return new GetCurrentSequenceIdsRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetCurrentSequenceIdsRequest | PlainMessage<GetCurrentSequenceIdsRequest> | undefined,
    b: GetCurrentSequenceIdsRequest | PlainMessage<GetCurrentSequenceIdsRequest> | undefined
  ): boolean {
    return proto3.util.equals(GetCurrentSequenceIdsRequest, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.GetCurrentSequenceIdsResponse
 */
export class GetCurrentSequenceIdsResponse extends Message<GetCurrentSequenceIdsResponse> {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.idgen.v1alpha1.Sequence sequences = 1;
   */
  sequences: Sequence[] = []

  constructor(data?: PartialMessage<GetCurrentSequenceIdsResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'tech.monstrs.chats_system.idgen.v1alpha1.GetCurrentSequenceIdsResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'sequences', kind: 'message', T: Sequence, repeated: true },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetCurrentSequenceIdsResponse {
    return new GetCurrentSequenceIdsResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetCurrentSequenceIdsResponse {
    return new GetCurrentSequenceIdsResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetCurrentSequenceIdsResponse {
    return new GetCurrentSequenceIdsResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetCurrentSequenceIdsResponse | PlainMessage<GetCurrentSequenceIdsResponse> | undefined,
    b: GetCurrentSequenceIdsResponse | PlainMessage<GetCurrentSequenceIdsResponse> | undefined
  ): boolean {
    return proto3.util.equals(GetCurrentSequenceIdsResponse, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.GetNextSequenceIdRequest
 */
export class GetNextSequenceIdRequest extends Message<GetNextSequenceIdRequest> {
  /**
   * @generated from field: tech.monstrs.chats_system.idgen.v1alpha1.SequenceQuery query = 1;
   */
  query?: SequenceQuery

  constructor(data?: PartialMessage<GetNextSequenceIdRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.idgen.v1alpha1.GetNextSequenceIdRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'query', kind: 'message', T: SequenceQuery },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetNextSequenceIdRequest {
    return new GetNextSequenceIdRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetNextSequenceIdRequest {
    return new GetNextSequenceIdRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetNextSequenceIdRequest {
    return new GetNextSequenceIdRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetNextSequenceIdRequest | PlainMessage<GetNextSequenceIdRequest> | undefined,
    b: GetNextSequenceIdRequest | PlainMessage<GetNextSequenceIdRequest> | undefined
  ): boolean {
    return proto3.util.equals(GetNextSequenceIdRequest, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.GetNextSequenceIdResponse
 */
export class GetNextSequenceIdResponse extends Message<GetNextSequenceIdResponse> {
  /**
   * @generated from field: tech.monstrs.chats_system.idgen.v1alpha1.Sequence sequence = 1;
   */
  sequence?: Sequence

  constructor(data?: PartialMessage<GetNextSequenceIdResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.idgen.v1alpha1.GetNextSequenceIdResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'sequence', kind: 'message', T: Sequence },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetNextSequenceIdResponse {
    return new GetNextSequenceIdResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetNextSequenceIdResponse {
    return new GetNextSequenceIdResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetNextSequenceIdResponse {
    return new GetNextSequenceIdResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetNextSequenceIdResponse | PlainMessage<GetNextSequenceIdResponse> | undefined,
    b: GetNextSequenceIdResponse | PlainMessage<GetNextSequenceIdResponse> | undefined
  ): boolean {
    return proto3.util.equals(GetNextSequenceIdResponse, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.GetNextSequenceIdsRequest
 */
export class GetNextSequenceIdsRequest extends Message<GetNextSequenceIdsRequest> {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.idgen.v1alpha1.SequenceQuery queries = 1;
   */
  queries: SequenceQuery[] = []

  constructor(data?: PartialMessage<GetNextSequenceIdsRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.idgen.v1alpha1.GetNextSequenceIdsRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'queries', kind: 'message', T: SequenceQuery, repeated: true },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetNextSequenceIdsRequest {
    return new GetNextSequenceIdsRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetNextSequenceIdsRequest {
    return new GetNextSequenceIdsRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetNextSequenceIdsRequest {
    return new GetNextSequenceIdsRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetNextSequenceIdsRequest | PlainMessage<GetNextSequenceIdsRequest> | undefined,
    b: GetNextSequenceIdsRequest | PlainMessage<GetNextSequenceIdsRequest> | undefined
  ): boolean {
    return proto3.util.equals(GetNextSequenceIdsRequest, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.GetNextSequenceIdsResponse
 */
export class GetNextSequenceIdsResponse extends Message<GetNextSequenceIdsResponse> {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.idgen.v1alpha1.Sequence sequences = 1;
   */
  sequences: Sequence[] = []

  constructor(data?: PartialMessage<GetNextSequenceIdsResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.idgen.v1alpha1.GetNextSequenceIdsResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'sequences', kind: 'message', T: Sequence, repeated: true },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetNextSequenceIdsResponse {
    return new GetNextSequenceIdsResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetNextSequenceIdsResponse {
    return new GetNextSequenceIdsResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetNextSequenceIdsResponse {
    return new GetNextSequenceIdsResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetNextSequenceIdsResponse | PlainMessage<GetNextSequenceIdsResponse> | undefined,
    b: GetNextSequenceIdsResponse | PlainMessage<GetNextSequenceIdsResponse> | undefined
  ): boolean {
    return proto3.util.equals(GetNextSequenceIdsResponse, a, b)
  }
}
