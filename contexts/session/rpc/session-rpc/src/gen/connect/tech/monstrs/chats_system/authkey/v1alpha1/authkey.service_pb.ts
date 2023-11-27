// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/authkey/v1alpha1/authkey.service.proto (package tech.monstrs.chats_system.authkey.v1alpha1, syntax proto3)
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

import { AuthKey }                from './authkey.types_pb.js'
import { AuthKeyConnection }      from './authkey.types_pb.js'
import { AuthKeyUser }            from './authkey.types_pb.js'

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.CreateAuthKeyRequest
 */
export class CreateAuthKeyRequest extends Message<CreateAuthKeyRequest> {
  /**
   * @generated from field: int64 auth_key_id = 1;
   */
  authKeyId = protoInt64.zero

  /**
   * @generated from field: bytes auth_key = 2;
   */
  authKey = new Uint8Array(0)

  /**
   * @generated from field: int32 auth_key_type = 3;
   */
  authKeyType = 0

  constructor(data?: PartialMessage<CreateAuthKeyRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.authkey.v1alpha1.CreateAuthKeyRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'auth_key_id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: 'auth_key', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: 'auth_key_type', kind: 'scalar', T: 5 /* ScalarType.INT32 */ },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateAuthKeyRequest {
    return new CreateAuthKeyRequest().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateAuthKeyRequest {
    return new CreateAuthKeyRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): CreateAuthKeyRequest {
    return new CreateAuthKeyRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: CreateAuthKeyRequest | PlainMessage<CreateAuthKeyRequest> | undefined,
    b: CreateAuthKeyRequest | PlainMessage<CreateAuthKeyRequest> | undefined
  ): boolean {
    return proto3.util.equals(CreateAuthKeyRequest, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.CreateAuthKeyResponse
 */
export class CreateAuthKeyResponse extends Message<CreateAuthKeyResponse> {
  /**
   * @generated from field: tech.monstrs.chats_system.authkey.v1alpha1.AuthKey auth_key = 1;
   */
  authKey?: AuthKey

  constructor(data?: PartialMessage<CreateAuthKeyResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.authkey.v1alpha1.CreateAuthKeyResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'auth_key', kind: 'message', T: AuthKey },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): CreateAuthKeyResponse {
    return new CreateAuthKeyResponse().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateAuthKeyResponse {
    return new CreateAuthKeyResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): CreateAuthKeyResponse {
    return new CreateAuthKeyResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: CreateAuthKeyResponse | PlainMessage<CreateAuthKeyResponse> | undefined,
    b: CreateAuthKeyResponse | PlainMessage<CreateAuthKeyResponse> | undefined
  ): boolean {
    return proto3.util.equals(CreateAuthKeyResponse, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.CreateAuthKeyUserRequest
 */
export class CreateAuthKeyUserRequest extends Message<CreateAuthKeyUserRequest> {
  /**
   * @generated from field: int64 auth_key_id = 1;
   */
  authKeyId = protoInt64.zero

  /**
   * @generated from field: int64 user_id = 2;
   */
  userId = protoInt64.zero

  constructor(data?: PartialMessage<CreateAuthKeyUserRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.authkey.v1alpha1.CreateAuthKeyUserRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'auth_key_id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: 'user_id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): CreateAuthKeyUserRequest {
    return new CreateAuthKeyUserRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): CreateAuthKeyUserRequest {
    return new CreateAuthKeyUserRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): CreateAuthKeyUserRequest {
    return new CreateAuthKeyUserRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: CreateAuthKeyUserRequest | PlainMessage<CreateAuthKeyUserRequest> | undefined,
    b: CreateAuthKeyUserRequest | PlainMessage<CreateAuthKeyUserRequest> | undefined
  ): boolean {
    return proto3.util.equals(CreateAuthKeyUserRequest, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.CreateAuthKeyUserResponse
 */
export class CreateAuthKeyUserResponse extends Message<CreateAuthKeyUserResponse> {
  /**
   * @generated from field: int64 hash = 1;
   */
  hash = protoInt64.zero

  constructor(data?: PartialMessage<CreateAuthKeyUserResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.authkey.v1alpha1.CreateAuthKeyUserResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'hash', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): CreateAuthKeyUserResponse {
    return new CreateAuthKeyUserResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): CreateAuthKeyUserResponse {
    return new CreateAuthKeyUserResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): CreateAuthKeyUserResponse {
    return new CreateAuthKeyUserResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: CreateAuthKeyUserResponse | PlainMessage<CreateAuthKeyUserResponse> | undefined,
    b: CreateAuthKeyUserResponse | PlainMessage<CreateAuthKeyUserResponse> | undefined
  ): boolean {
    return proto3.util.equals(CreateAuthKeyUserResponse, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.CreateAuthKeyConnectionRequest
 */
export class CreateAuthKeyConnectionRequest extends Message<CreateAuthKeyConnectionRequest> {
  /**
   * @generated from field: int64 auth_key_id = 1;
   */
  authKeyId = protoInt64.zero

  /**
   * @generated from field: string client_ip = 2;
   */
  clientIp = ''

  /**
   * @generated from field: int32 layer = 3;
   */
  layer = 0

  /**
   * @generated from field: int32 api_id = 4;
   */
  apiId = 0

  /**
   * @generated from field: string device_model = 5;
   */
  deviceModel = ''

  /**
   * @generated from field: string system_version = 6;
   */
  systemVersion = ''

  /**
   * @generated from field: string app_version = 7;
   */
  appVersion = ''

  /**
   * @generated from field: string system_lang_code = 8;
   */
  systemLangCode = ''

  /**
   * @generated from field: string lang_pack = 9;
   */
  langPack = ''

  /**
   * @generated from field: string lang_code = 10;
   */
  langCode = ''

  /**
   * @generated from field: optional string params = 11;
   */
  params?: string

  constructor(data?: PartialMessage<CreateAuthKeyConnectionRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'tech.monstrs.chats_system.authkey.v1alpha1.CreateAuthKeyConnectionRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'auth_key_id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: 'client_ip', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'layer', kind: 'scalar', T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: 'api_id', kind: 'scalar', T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: 'device_model', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 6, name: 'system_version', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 7, name: 'app_version', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 8, name: 'system_lang_code', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 9, name: 'lang_pack', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 10, name: 'lang_code', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 11, name: 'params', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): CreateAuthKeyConnectionRequest {
    return new CreateAuthKeyConnectionRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): CreateAuthKeyConnectionRequest {
    return new CreateAuthKeyConnectionRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): CreateAuthKeyConnectionRequest {
    return new CreateAuthKeyConnectionRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: CreateAuthKeyConnectionRequest | PlainMessage<CreateAuthKeyConnectionRequest> | undefined,
    b: CreateAuthKeyConnectionRequest | PlainMessage<CreateAuthKeyConnectionRequest> | undefined
  ): boolean {
    return proto3.util.equals(CreateAuthKeyConnectionRequest, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.CreateAuthKeyConnectionResponse
 */
export class CreateAuthKeyConnectionResponse extends Message<CreateAuthKeyConnectionResponse> {
  /**
   * @generated from field: tech.monstrs.chats_system.authkey.v1alpha1.AuthKeyConnection auth_key_connection = 1;
   */
  authKeyConnection?: AuthKeyConnection

  constructor(data?: PartialMessage<CreateAuthKeyConnectionResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'tech.monstrs.chats_system.authkey.v1alpha1.CreateAuthKeyConnectionResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'auth_key_connection', kind: 'message', T: AuthKeyConnection },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): CreateAuthKeyConnectionResponse {
    return new CreateAuthKeyConnectionResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): CreateAuthKeyConnectionResponse {
    return new CreateAuthKeyConnectionResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): CreateAuthKeyConnectionResponse {
    return new CreateAuthKeyConnectionResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: CreateAuthKeyConnectionResponse | PlainMessage<CreateAuthKeyConnectionResponse> | undefined,
    b: CreateAuthKeyConnectionResponse | PlainMessage<CreateAuthKeyConnectionResponse> | undefined
  ): boolean {
    return proto3.util.equals(CreateAuthKeyConnectionResponse, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.UpdateAuthKeyConnectionRequest
 */
export class UpdateAuthKeyConnectionRequest extends Message<UpdateAuthKeyConnectionRequest> {
  /**
   * @generated from field: int64 auth_key_id = 1;
   */
  authKeyId = protoInt64.zero

  /**
   * @generated from field: optional string client_ip = 2;
   */
  clientIp?: string

  /**
   * @generated from field: optional int32 layer = 3;
   */
  layer?: number

  /**
   * @generated from field: optional int32 api_id = 4;
   */
  apiId?: number

  /**
   * @generated from field: optional string device_model = 5;
   */
  deviceModel?: string

  /**
   * @generated from field: optional string system_version = 6;
   */
  systemVersion?: string

  /**
   * @generated from field: optional string app_version = 7;
   */
  appVersion?: string

  /**
   * @generated from field: optional string system_lang_code = 8;
   */
  systemLangCode?: string

  /**
   * @generated from field: optional string lang_pack = 9;
   */
  langPack?: string

  /**
   * @generated from field: optional string lang_code = 10;
   */
  langCode?: string

  /**
   * @generated from field: optional string params = 11;
   */
  params?: string

  constructor(data?: PartialMessage<UpdateAuthKeyConnectionRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'tech.monstrs.chats_system.authkey.v1alpha1.UpdateAuthKeyConnectionRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'auth_key_id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: 'client_ip', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: 'layer', kind: 'scalar', T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 4, name: 'api_id', kind: 'scalar', T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 5, name: 'device_model', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
    { no: 6, name: 'system_version', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
    { no: 7, name: 'app_version', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
    { no: 8, name: 'system_lang_code', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
    { no: 9, name: 'lang_pack', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
    { no: 10, name: 'lang_code', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
    { no: 11, name: 'params', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): UpdateAuthKeyConnectionRequest {
    return new UpdateAuthKeyConnectionRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): UpdateAuthKeyConnectionRequest {
    return new UpdateAuthKeyConnectionRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): UpdateAuthKeyConnectionRequest {
    return new UpdateAuthKeyConnectionRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: UpdateAuthKeyConnectionRequest | PlainMessage<UpdateAuthKeyConnectionRequest> | undefined,
    b: UpdateAuthKeyConnectionRequest | PlainMessage<UpdateAuthKeyConnectionRequest> | undefined
  ): boolean {
    return proto3.util.equals(UpdateAuthKeyConnectionRequest, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.UpdateAuthKeyConnectionResponse
 */
export class UpdateAuthKeyConnectionResponse extends Message<UpdateAuthKeyConnectionResponse> {
  /**
   * @generated from field: tech.monstrs.chats_system.authkey.v1alpha1.AuthKeyConnection auth_key_connection = 1;
   */
  authKeyConnection?: AuthKeyConnection

  constructor(data?: PartialMessage<UpdateAuthKeyConnectionResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'tech.monstrs.chats_system.authkey.v1alpha1.UpdateAuthKeyConnectionResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'auth_key_connection', kind: 'message', T: AuthKeyConnection },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): UpdateAuthKeyConnectionResponse {
    return new UpdateAuthKeyConnectionResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): UpdateAuthKeyConnectionResponse {
    return new UpdateAuthKeyConnectionResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): UpdateAuthKeyConnectionResponse {
    return new UpdateAuthKeyConnectionResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: UpdateAuthKeyConnectionResponse | PlainMessage<UpdateAuthKeyConnectionResponse> | undefined,
    b: UpdateAuthKeyConnectionResponse | PlainMessage<UpdateAuthKeyConnectionResponse> | undefined
  ): boolean {
    return proto3.util.equals(UpdateAuthKeyConnectionResponse, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.GetAuthKeyRequest
 */
export class GetAuthKeyRequest extends Message<GetAuthKeyRequest> {
  /**
   * @generated from field: int64 auth_key_id = 1;
   */
  authKeyId = protoInt64.zero

  constructor(data?: PartialMessage<GetAuthKeyRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.authkey.v1alpha1.GetAuthKeyRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'auth_key_id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAuthKeyRequest {
    return new GetAuthKeyRequest().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAuthKeyRequest {
    return new GetAuthKeyRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAuthKeyRequest {
    return new GetAuthKeyRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetAuthKeyRequest | PlainMessage<GetAuthKeyRequest> | undefined,
    b: GetAuthKeyRequest | PlainMessage<GetAuthKeyRequest> | undefined
  ): boolean {
    return proto3.util.equals(GetAuthKeyRequest, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.GetAuthKeyResponse
 */
export class GetAuthKeyResponse extends Message<GetAuthKeyResponse> {
  /**
   * @generated from field: tech.monstrs.chats_system.authkey.v1alpha1.AuthKey auth_key = 1;
   */
  authKey?: AuthKey

  constructor(data?: PartialMessage<GetAuthKeyResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.authkey.v1alpha1.GetAuthKeyResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'auth_key', kind: 'message', T: AuthKey },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAuthKeyResponse {
    return new GetAuthKeyResponse().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAuthKeyResponse {
    return new GetAuthKeyResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetAuthKeyResponse {
    return new GetAuthKeyResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetAuthKeyResponse | PlainMessage<GetAuthKeyResponse> | undefined,
    b: GetAuthKeyResponse | PlainMessage<GetAuthKeyResponse> | undefined
  ): boolean {
    return proto3.util.equals(GetAuthKeyResponse, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.GetAuthKeyConnectionRequest
 */
export class GetAuthKeyConnectionRequest extends Message<GetAuthKeyConnectionRequest> {
  /**
   * @generated from field: int64 auth_key_id = 1;
   */
  authKeyId = protoInt64.zero

  constructor(data?: PartialMessage<GetAuthKeyConnectionRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'tech.monstrs.chats_system.authkey.v1alpha1.GetAuthKeyConnectionRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'auth_key_id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetAuthKeyConnectionRequest {
    return new GetAuthKeyConnectionRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetAuthKeyConnectionRequest {
    return new GetAuthKeyConnectionRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetAuthKeyConnectionRequest {
    return new GetAuthKeyConnectionRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetAuthKeyConnectionRequest | PlainMessage<GetAuthKeyConnectionRequest> | undefined,
    b: GetAuthKeyConnectionRequest | PlainMessage<GetAuthKeyConnectionRequest> | undefined
  ): boolean {
    return proto3.util.equals(GetAuthKeyConnectionRequest, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.GetAuthKeyConnectionResponse
 */
export class GetAuthKeyConnectionResponse extends Message<GetAuthKeyConnectionResponse> {
  /**
   * @generated from field: tech.monstrs.chats_system.authkey.v1alpha1.AuthKeyConnection auth_key_connection = 1;
   */
  authKeyConnection?: AuthKeyConnection

  constructor(data?: PartialMessage<GetAuthKeyConnectionResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'tech.monstrs.chats_system.authkey.v1alpha1.GetAuthKeyConnectionResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'auth_key_connection', kind: 'message', T: AuthKeyConnection },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetAuthKeyConnectionResponse {
    return new GetAuthKeyConnectionResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetAuthKeyConnectionResponse {
    return new GetAuthKeyConnectionResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetAuthKeyConnectionResponse {
    return new GetAuthKeyConnectionResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetAuthKeyConnectionResponse | PlainMessage<GetAuthKeyConnectionResponse> | undefined,
    b: GetAuthKeyConnectionResponse | PlainMessage<GetAuthKeyConnectionResponse> | undefined
  ): boolean {
    return proto3.util.equals(GetAuthKeyConnectionResponse, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.GetAuthKeyUserRequest
 */
export class GetAuthKeyUserRequest extends Message<GetAuthKeyUserRequest> {
  /**
   * @generated from field: int64 auth_key_id = 1;
   */
  authKeyId = protoInt64.zero

  constructor(data?: PartialMessage<GetAuthKeyUserRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.authkey.v1alpha1.GetAuthKeyUserRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'auth_key_id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetAuthKeyUserRequest {
    return new GetAuthKeyUserRequest().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAuthKeyUserRequest {
    return new GetAuthKeyUserRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetAuthKeyUserRequest {
    return new GetAuthKeyUserRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetAuthKeyUserRequest | PlainMessage<GetAuthKeyUserRequest> | undefined,
    b: GetAuthKeyUserRequest | PlainMessage<GetAuthKeyUserRequest> | undefined
  ): boolean {
    return proto3.util.equals(GetAuthKeyUserRequest, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.GetAuthKeyUserResponse
 */
export class GetAuthKeyUserResponse extends Message<GetAuthKeyUserResponse> {
  /**
   * @generated from field: tech.monstrs.chats_system.authkey.v1alpha1.AuthKeyUser auth_key_user = 1;
   */
  authKeyUser?: AuthKeyUser

  constructor(data?: PartialMessage<GetAuthKeyUserResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.authkey.v1alpha1.GetAuthKeyUserResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'auth_key_user', kind: 'message', T: AuthKeyUser },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetAuthKeyUserResponse {
    return new GetAuthKeyUserResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetAuthKeyUserResponse {
    return new GetAuthKeyUserResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetAuthKeyUserResponse {
    return new GetAuthKeyUserResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetAuthKeyUserResponse | PlainMessage<GetAuthKeyUserResponse> | undefined,
    b: GetAuthKeyUserResponse | PlainMessage<GetAuthKeyUserResponse> | undefined
  ): boolean {
    return proto3.util.equals(GetAuthKeyUserResponse, a, b)
  }
}
