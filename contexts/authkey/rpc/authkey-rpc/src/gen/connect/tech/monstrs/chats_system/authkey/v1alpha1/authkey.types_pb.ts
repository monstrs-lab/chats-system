// @generated by protoc-gen-es v1.7.2 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/authkey/v1alpha1/authkey.types.proto (package tech.monstrs.chats_system.authkey.v1alpha1, syntax proto3)
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
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.AuthKey
 */
export class AuthKey extends Message<AuthKey> {
  /**
   * @generated from field: int64 id = 1;
   */
  id = protoInt64.zero

  /**
   * @generated from field: bytes key = 2;
   */
  key = new Uint8Array(0)

  constructor(data?: PartialMessage<AuthKey>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.authkey.v1alpha1.AuthKey'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: 'key', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthKey {
    return new AuthKey().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthKey {
    return new AuthKey().fromJson(jsonValue, options)
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthKey {
    return new AuthKey().fromJsonString(jsonString, options)
  }

  static equals(
    a: AuthKey | PlainMessage<AuthKey> | undefined,
    b: AuthKey | PlainMessage<AuthKey> | undefined
  ): boolean {
    return proto3.util.equals(AuthKey, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.AuthKeyUser
 */
export class AuthKeyUser extends Message<AuthKeyUser> {
  /**
   * @generated from field: int64 id = 1;
   */
  id = protoInt64.zero

  /**
   * @generated from field: int64 auth_key_id = 2;
   */
  authKeyId = protoInt64.zero

  /**
   * @generated from field: int64 user_id = 3;
   */
  userId = protoInt64.zero

  constructor(data?: PartialMessage<AuthKeyUser>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.authkey.v1alpha1.AuthKeyUser'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: 'auth_key_id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: 'user_id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthKeyUser {
    return new AuthKeyUser().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthKeyUser {
    return new AuthKeyUser().fromJson(jsonValue, options)
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthKeyUser {
    return new AuthKeyUser().fromJsonString(jsonString, options)
  }

  static equals(
    a: AuthKeyUser | PlainMessage<AuthKeyUser> | undefined,
    b: AuthKeyUser | PlainMessage<AuthKeyUser> | undefined
  ): boolean {
    return proto3.util.equals(AuthKeyUser, a, b)
  }
}
