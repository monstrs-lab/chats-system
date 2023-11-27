// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/auth/v1alpha1/auth.types.proto (package tech.monstrs.chats_system.auth.v1alpha1, syntax proto3)
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

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.CodeSettings
 */
export class CodeSettings extends Message<CodeSettings> {
  /**
   * @generated from field: optional bool allow_flashcall = 1;
   */
  allowFlashcall?: boolean

  /**
   * @generated from field: optional bool current_number = 2;
   */
  currentNumber?: boolean

  /**
   * @generated from field: optional bool allow_app_hash = 3;
   */
  allowAppHash?: boolean

  /**
   * @generated from field: optional bool allow_missed_call = 4;
   */
  allowMissedCall?: boolean

  /**
   * @generated from field: optional bool allow_firebase = 5;
   */
  allowFirebase?: boolean

  /**
   * @generated from field: optional bool app_sandbox = 6;
   */
  appSandbox?: boolean

  /**
   * @generated from field: optional string token = 7;
   */
  token?: string

  /**
   * @generated from field: repeated bytes logout_tokens = 8;
   */
  logoutTokens: Uint8Array[] = []

  constructor(data?: PartialMessage<CodeSettings>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.auth.v1alpha1.CodeSettings'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'allow_flashcall', kind: 'scalar', T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 2, name: 'current_number', kind: 'scalar', T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 3, name: 'allow_app_hash', kind: 'scalar', T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 4, name: 'allow_missed_call', kind: 'scalar', T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 5, name: 'allow_firebase', kind: 'scalar', T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 6, name: 'app_sandbox', kind: 'scalar', T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 7, name: 'token', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
    { no: 8, name: 'logout_tokens', kind: 'scalar', T: 12 /* ScalarType.BYTES */, repeated: true },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CodeSettings {
    return new CodeSettings().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CodeSettings {
    return new CodeSettings().fromJson(jsonValue, options)
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CodeSettings {
    return new CodeSettings().fromJsonString(jsonString, options)
  }

  static equals(
    a: CodeSettings | PlainMessage<CodeSettings> | undefined,
    b: CodeSettings | PlainMessage<CodeSettings> | undefined
  ): boolean {
    return proto3.util.equals(CodeSettings, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.SentCode
 */
export class SentCode extends Message<SentCode> {
  /**
   * @generated from field: string phone_code_hash = 1;
   */
  phoneCodeHash = ''

  /**
   * @generated from field: optional int32 timeout = 2;
   */
  timeout?: number

  constructor(data?: PartialMessage<SentCode>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.auth.v1alpha1.SentCode'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'phone_code_hash', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'timeout', kind: 'scalar', T: 5 /* ScalarType.INT32 */, opt: true },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SentCode {
    return new SentCode().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SentCode {
    return new SentCode().fromJson(jsonValue, options)
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SentCode {
    return new SentCode().fromJsonString(jsonString, options)
  }

  static equals(
    a: SentCode | PlainMessage<SentCode> | undefined,
    b: SentCode | PlainMessage<SentCode> | undefined
  ): boolean {
    return proto3.util.equals(SentCode, a, b)
  }
}
