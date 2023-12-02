// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/auth/v1alpha1/auth.service.proto (package tech.monstrs.chats_system.auth.v1alpha1, syntax proto3)
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

import { Authorization }          from './auth.types_pb.js'
import { SentCode }               from './auth.types_pb.js'

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.SendCodeRequest
 */
export class SendCodeRequest extends Message<SendCodeRequest> {
  /**
   * @generated from field: string phone = 1;
   */
  phone = ''

  constructor(data?: PartialMessage<SendCodeRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.auth.v1alpha1.SendCodeRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'phone', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendCodeRequest {
    return new SendCodeRequest().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendCodeRequest {
    return new SendCodeRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendCodeRequest {
    return new SendCodeRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: SendCodeRequest | PlainMessage<SendCodeRequest> | undefined,
    b: SendCodeRequest | PlainMessage<SendCodeRequest> | undefined
  ): boolean {
    return proto3.util.equals(SendCodeRequest, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.SendCodeResponse
 */
export class SendCodeResponse extends Message<SendCodeResponse> {
  /**
   * @generated from field: tech.monstrs.chats_system.auth.v1alpha1.SentCode sent_code = 1;
   */
  sentCode?: SentCode

  constructor(data?: PartialMessage<SendCodeResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.auth.v1alpha1.SendCodeResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'sent_code', kind: 'message', T: SentCode },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendCodeResponse {
    return new SendCodeResponse().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendCodeResponse {
    return new SendCodeResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendCodeResponse {
    return new SendCodeResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: SendCodeResponse | PlainMessage<SendCodeResponse> | undefined,
    b: SendCodeResponse | PlainMessage<SendCodeResponse> | undefined
  ): boolean {
    return proto3.util.equals(SendCodeResponse, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.SignInRequest
 */
export class SignInRequest extends Message<SignInRequest> {
  /**
   * @generated from field: string phone = 1;
   */
  phone = ''

  /**
   * @generated from field: string phone_code = 2;
   */
  phoneCode = ''

  /**
   * @generated from field: string phone_code_hash = 3;
   */
  phoneCodeHash = ''

  constructor(data?: PartialMessage<SignInRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.auth.v1alpha1.SignInRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'phone', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'phone_code', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'phone_code_hash', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignInRequest {
    return new SignInRequest().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignInRequest {
    return new SignInRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignInRequest {
    return new SignInRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: SignInRequest | PlainMessage<SignInRequest> | undefined,
    b: SignInRequest | PlainMessage<SignInRequest> | undefined
  ): boolean {
    return proto3.util.equals(SignInRequest, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.SignInResponse
 */
export class SignInResponse extends Message<SignInResponse> {
  /**
   * @generated from field: optional tech.monstrs.chats_system.auth.v1alpha1.Authorization authorization = 1;
   */
  authorization?: Authorization

  constructor(data?: PartialMessage<SignInResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.auth.v1alpha1.SignInResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'authorization', kind: 'message', T: Authorization, opt: true },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignInResponse {
    return new SignInResponse().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignInResponse {
    return new SignInResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignInResponse {
    return new SignInResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: SignInResponse | PlainMessage<SignInResponse> | undefined,
    b: SignInResponse | PlainMessage<SignInResponse> | undefined
  ): boolean {
    return proto3.util.equals(SignInResponse, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.SignUpRequest
 */
export class SignUpRequest extends Message<SignUpRequest> {
  /**
   * @generated from field: string phone = 1;
   */
  phone = ''

  /**
   * @generated from field: string phone_code_hash = 2;
   */
  phoneCodeHash = ''

  /**
   * @generated from field: string first_name = 3;
   */
  firstName = ''

  /**
   * @generated from field: string last_name = 4;
   */
  lastName = ''

  constructor(data?: PartialMessage<SignUpRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.auth.v1alpha1.SignUpRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'phone', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'phone_code_hash', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'first_name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 4, name: 'last_name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignUpRequest {
    return new SignUpRequest().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignUpRequest {
    return new SignUpRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignUpRequest {
    return new SignUpRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: SignUpRequest | PlainMessage<SignUpRequest> | undefined,
    b: SignUpRequest | PlainMessage<SignUpRequest> | undefined
  ): boolean {
    return proto3.util.equals(SignUpRequest, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.SignUpResponse
 */
export class SignUpResponse extends Message<SignUpResponse> {
  /**
   * @generated from field: optional tech.monstrs.chats_system.auth.v1alpha1.Authorization authorization = 1;
   */
  authorization?: Authorization

  constructor(data?: PartialMessage<SignUpResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.auth.v1alpha1.SignUpResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'authorization', kind: 'message', T: Authorization, opt: true },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignUpResponse {
    return new SignUpResponse().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignUpResponse {
    return new SignUpResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignUpResponse {
    return new SignUpResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: SignUpResponse | PlainMessage<SignUpResponse> | undefined,
    b: SignUpResponse | PlainMessage<SignUpResponse> | undefined
  ): boolean {
    return proto3.util.equals(SignUpResponse, a, b)
  }
}
