// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/updates/v1alpha1/updates.service.proto (package tech.monstrs.chats_system.updates.v1alpha1, syntax proto3)
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
 * @generated from message tech.monstrs.chats_system.updates.v1alpha1.State
 */
export class State extends Message<State> {
  /**
   * @generated from field: int32 pts = 1;
   */
  pts = 0

  /**
   * @generated from field: int32 qts = 2;
   */
  qts = 0

  /**
   * @generated from field: int32 date = 3;
   */
  date = 0

  /**
   * @generated from field: int32 seq = 4;
   */
  seq = 0

  /**
   * @generated from field: int32 unread_count = 5;
   */
  unreadCount = 0

  constructor(data?: PartialMessage<State>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.updates.v1alpha1.State'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'pts', kind: 'scalar', T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: 'qts', kind: 'scalar', T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: 'date', kind: 'scalar', T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: 'seq', kind: 'scalar', T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: 'unread_count', kind: 'scalar', T: 5 /* ScalarType.INT32 */ },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): State {
    return new State().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): State {
    return new State().fromJson(jsonValue, options)
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): State {
    return new State().fromJsonString(jsonString, options)
  }

  static equals(
    a: State | PlainMessage<State> | undefined,
    b: State | PlainMessage<State> | undefined
  ): boolean {
    return proto3.util.equals(State, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.updates.v1alpha1.GetStateRequest
 */
export class GetStateRequest extends Message<GetStateRequest> {
  /**
   * @generated from field: int64 auth_key_id = 1;
   */
  authKeyId = protoInt64.zero

  /**
   * @generated from field: int64 user_id = 2;
   */
  userId = protoInt64.zero

  constructor(data?: PartialMessage<GetStateRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.updates.v1alpha1.GetStateRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'auth_key_id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: 'user_id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetStateRequest {
    return new GetStateRequest().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetStateRequest {
    return new GetStateRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetStateRequest {
    return new GetStateRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetStateRequest | PlainMessage<GetStateRequest> | undefined,
    b: GetStateRequest | PlainMessage<GetStateRequest> | undefined
  ): boolean {
    return proto3.util.equals(GetStateRequest, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.updates.v1alpha1.GetStateResponse
 */
export class GetStateResponse extends Message<GetStateResponse> {
  /**
   * @generated from field: tech.monstrs.chats_system.updates.v1alpha1.State state = 1;
   */
  state?: State

  constructor(data?: PartialMessage<GetStateResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.updates.v1alpha1.GetStateResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'state', kind: 'message', T: State },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetStateResponse {
    return new GetStateResponse().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetStateResponse {
    return new GetStateResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetStateResponse {
    return new GetStateResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetStateResponse | PlainMessage<GetStateResponse> | undefined,
    b: GetStateResponse | PlainMessage<GetStateResponse> | undefined
  ): boolean {
    return proto3.util.equals(GetStateResponse, a, b)
  }
}
