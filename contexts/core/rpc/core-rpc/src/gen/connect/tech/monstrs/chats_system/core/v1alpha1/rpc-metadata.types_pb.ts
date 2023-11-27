// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/core/v1alpha1/rpc-metadata.types.proto (package tech.monstrs.chats_system.core.v1alpha1, syntax proto3)
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
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.RpcMetadata
 */
export class RpcMetadata extends Message<RpcMetadata> {
  /**
   * @generated from field: int64 auth_key_id = 1;
   */
  authKeyId = protoInt64.zero

  /**
   * @generated from field: int64 session_id = 2;
   */
  sessionId = protoInt64.zero

  /**
   * @generated from field: int64 user_id = 3;
   */
  userId = protoInt64.zero

  /**
   * @generated from field: int64 client_message_id = 4;
   */
  clientMessageId = protoInt64.zero

  /**
   * @generated from field: int64 perm_auth_key_id = 5;
   */
  permAuthKeyId = protoInt64.zero

  /**
   * @generated from field: string server_id = 6;
   */
  serverId = ''

  /**
   * @generated from field: string client_ip = 7;
   */
  clientIp = ''

  /**
   * @generated from field: int32 receive_time = 8;
   */
  receiveTime = 0

  /**
   * @generated from field: int32 layer = 9;
   */
  layer = 0

  /**
   * @generated from field: string client = 10;
   */
  client = ''

  /**
   * @generated from field: string lang_pack = 11;
   */
  langPack = ''

  constructor(data?: PartialMessage<RpcMetadata>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.monstrs.chats_system.core.v1alpha1.RpcMetadata'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'auth_key_id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: 'session_id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: 'user_id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: 'client_message_id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: 'perm_auth_key_id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: 'server_id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 7, name: 'client_ip', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 8, name: 'receive_time', kind: 'scalar', T: 5 /* ScalarType.INT32 */ },
    { no: 9, name: 'layer', kind: 'scalar', T: 5 /* ScalarType.INT32 */ },
    { no: 10, name: 'client', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 11, name: 'lang_pack', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RpcMetadata {
    return new RpcMetadata().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RpcMetadata {
    return new RpcMetadata().fromJson(jsonValue, options)
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RpcMetadata {
    return new RpcMetadata().fromJsonString(jsonString, options)
  }

  static equals(
    a: RpcMetadata | PlainMessage<RpcMetadata> | undefined,
    b: RpcMetadata | PlainMessage<RpcMetadata> | undefined
  ): boolean {
    return proto3.util.equals(RpcMetadata, a, b)
  }
}
