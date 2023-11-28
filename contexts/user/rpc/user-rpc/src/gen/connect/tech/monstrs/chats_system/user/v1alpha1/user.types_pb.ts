// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/user/v1alpha1/user.types.proto (package tech.monstrs.chats_system.user.v1alpha1, syntax proto3)
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
 * @generated from message tech.monstrs.chats_system.user.v1alpha1.User
 */
export class User extends Message<User> {
  /**
   * @generated from field: int64 id = 1;
   */
  id = protoInt64.zero

  /**
   * @generated from field: int64 secret_key_id = 2;
   */
  secretKeyId = protoInt64.zero

  /**
   * @generated from field: string first_name = 3;
   */
  firstName = ''

  /**
   * @generated from field: string last_name = 4;
   */
  lastName = ''

  /**
   * @generated from field: string phone = 5;
   */
  phone = ''

  /**
   * @generated from field: optional int64 access_hash = 6;
   */
  accessHash?: bigint

  constructor(data?: PartialMessage<User>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.user.v1alpha1.User'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: 'secret_key_id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: 'first_name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 4, name: 'last_name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 5, name: 'phone', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 6, name: 'access_hash', kind: 'scalar', T: 3 /* ScalarType.INT64 */, opt: true },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User {
    return new User().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User {
    return new User().fromJson(jsonValue, options)
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User {
    return new User().fromJsonString(jsonString, options)
  }

  static equals(
    a: User | PlainMessage<User> | undefined,
    b: User | PlainMessage<User> | undefined
  ): boolean {
    return proto3.util.equals(User, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.user.v1alpha1.InputContact
 */
export class InputContact extends Message<InputContact> {
  /**
   * @generated from field: int64 client_id = 1;
   */
  clientId = protoInt64.zero

  /**
   * @generated from field: string phone = 2;
   */
  phone = ''

  /**
   * @generated from field: string first_name = 3;
   */
  firstName = ''

  /**
   * @generated from field: string last_name = 4;
   */
  lastName = ''

  constructor(data?: PartialMessage<InputContact>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.user.v1alpha1.InputContact'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'client_id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: 'phone', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'first_name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 4, name: 'last_name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InputContact {
    return new InputContact().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InputContact {
    return new InputContact().fromJson(jsonValue, options)
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InputContact {
    return new InputContact().fromJsonString(jsonString, options)
  }

  static equals(
    a: InputContact | PlainMessage<InputContact> | undefined,
    b: InputContact | PlainMessage<InputContact> | undefined
  ): boolean {
    return proto3.util.equals(InputContact, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.user.v1alpha1.ImportedContact
 */
export class ImportedContact extends Message<ImportedContact> {
  /**
   * @generated from field: int64 client_id = 1;
   */
  clientId = protoInt64.zero

  /**
   * @generated from field: int64 user_id = 2;
   */
  userId = protoInt64.zero

  constructor(data?: PartialMessage<ImportedContact>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.user.v1alpha1.ImportedContact'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'client_id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: 'user_id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImportedContact {
    return new ImportedContact().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImportedContact {
    return new ImportedContact().fromJson(jsonValue, options)
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImportedContact {
    return new ImportedContact().fromJsonString(jsonString, options)
  }

  static equals(
    a: ImportedContact | PlainMessage<ImportedContact> | undefined,
    b: ImportedContact | PlainMessage<ImportedContact> | undefined
  ): boolean {
    return proto3.util.equals(ImportedContact, a, b)
  }
}

/**
 * @generated from message tech.monstrs.chats_system.user.v1alpha1.ImportedContacts
 */
export class ImportedContacts extends Message<ImportedContacts> {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.user.v1alpha1.ImportedContact imported = 1;
   */
  imported: ImportedContact[] = []

  /**
   * @generated from field: repeated tech.monstrs.chats_system.user.v1alpha1.User users = 2;
   */
  users: User[] = []

  constructor(data?: PartialMessage<ImportedContacts>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.user.v1alpha1.ImportedContacts'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'imported', kind: 'message', T: ImportedContact, repeated: true },
    { no: 2, name: 'users', kind: 'message', T: User, repeated: true },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImportedContacts {
    return new ImportedContacts().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImportedContacts {
    return new ImportedContacts().fromJson(jsonValue, options)
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImportedContacts {
    return new ImportedContacts().fromJsonString(jsonString, options)
  }

  static equals(
    a: ImportedContacts | PlainMessage<ImportedContacts> | undefined,
    b: ImportedContacts | PlainMessage<ImportedContacts> | undefined
  ): boolean {
    return proto3.util.equals(ImportedContacts, a, b)
  }
}
