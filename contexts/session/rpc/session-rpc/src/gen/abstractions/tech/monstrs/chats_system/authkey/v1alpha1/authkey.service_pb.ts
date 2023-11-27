// @generated by protoc-gen-abstractions 0.0.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/authkey/v1alpha1/authkey.service.proto (package tech.monstrs.chats_system.authkey.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { AuthKey }           from './authkey.types_pb.js'
import type { AuthKeyConnection } from './authkey.types_pb.js'
import type { AuthKeyUser }       from './authkey.types_pb.js'

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.CreateAuthKeyRequest
 */
export abstract class CreateAuthKeyRequest {
  /**
   * @generated from field: int64 auth_key_id = 1;
   */
  abstract readonly authKeyId: bigint

  /**
   * @generated from field: bytes auth_key = 2;
   */
  abstract readonly authKey: Uint8Array

  /**
   * @generated from field: int32 auth_key_type = 3;
   */
  abstract readonly authKeyType: number
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.CreateAuthKeyResponse
 */
export abstract class CreateAuthKeyResponse {
  /**
   * @generated from field: tech.monstrs.chats_system.authkey.v1alpha1.AuthKey auth_key = 1;
   */
  abstract readonly authKey?: AuthKey
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.CreateAuthKeyUserRequest
 */
export abstract class CreateAuthKeyUserRequest {
  /**
   * @generated from field: int64 auth_key_id = 1;
   */
  abstract readonly authKeyId: bigint

  /**
   * @generated from field: int64 user_id = 2;
   */
  abstract readonly userId: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.CreateAuthKeyUserResponse
 */
export abstract class CreateAuthKeyUserResponse {
  /**
   * @generated from field: int64 hash = 1;
   */
  abstract readonly hash: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.CreateAuthKeyConnectionRequest
 */
export abstract class CreateAuthKeyConnectionRequest {
  /**
   * @generated from field: int64 auth_key_id = 1;
   */
  abstract readonly authKeyId: bigint

  /**
   * @generated from field: string client_ip = 2;
   */
  abstract readonly clientIp: string

  /**
   * @generated from field: int32 layer = 3;
   */
  abstract readonly layer: number

  /**
   * @generated from field: int32 api_id = 4;
   */
  abstract readonly apiId: number

  /**
   * @generated from field: string device_model = 5;
   */
  abstract readonly deviceModel: string

  /**
   * @generated from field: string system_version = 6;
   */
  abstract readonly systemVersion: string

  /**
   * @generated from field: string app_version = 7;
   */
  abstract readonly appVersion: string

  /**
   * @generated from field: string system_lang_code = 8;
   */
  abstract readonly systemLangCode: string

  /**
   * @generated from field: string lang_pack = 9;
   */
  abstract readonly langPack: string

  /**
   * @generated from field: string lang_code = 10;
   */
  abstract readonly langCode: string

  /**
   * @generated from field: optional string params = 11;
   */
  abstract readonly params?: string
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.CreateAuthKeyConnectionResponse
 */
export abstract class CreateAuthKeyConnectionResponse {
  /**
   * @generated from field: tech.monstrs.chats_system.authkey.v1alpha1.AuthKeyConnection auth_key_connection = 1;
   */
  abstract readonly authKeyConnection?: AuthKeyConnection
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.UpdateAuthKeyConnectionRequest
 */
export abstract class UpdateAuthKeyConnectionRequest {
  /**
   * @generated from field: int64 auth_key_id = 1;
   */
  abstract readonly authKeyId: bigint

  /**
   * @generated from field: optional string client_ip = 2;
   */
  abstract readonly clientIp?: string

  /**
   * @generated from field: optional int32 layer = 3;
   */
  abstract readonly layer?: number

  /**
   * @generated from field: optional int32 api_id = 4;
   */
  abstract readonly apiId?: number

  /**
   * @generated from field: optional string device_model = 5;
   */
  abstract readonly deviceModel?: string

  /**
   * @generated from field: optional string system_version = 6;
   */
  abstract readonly systemVersion?: string

  /**
   * @generated from field: optional string app_version = 7;
   */
  abstract readonly appVersion?: string

  /**
   * @generated from field: optional string system_lang_code = 8;
   */
  abstract readonly systemLangCode?: string

  /**
   * @generated from field: optional string lang_pack = 9;
   */
  abstract readonly langPack?: string

  /**
   * @generated from field: optional string lang_code = 10;
   */
  abstract readonly langCode?: string

  /**
   * @generated from field: optional string params = 11;
   */
  abstract readonly params?: string
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.UpdateAuthKeyConnectionResponse
 */
export abstract class UpdateAuthKeyConnectionResponse {
  /**
   * @generated from field: tech.monstrs.chats_system.authkey.v1alpha1.AuthKeyConnection auth_key_connection = 1;
   */
  abstract readonly authKeyConnection?: AuthKeyConnection
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.GetAuthKeyRequest
 */
export abstract class GetAuthKeyRequest {
  /**
   * @generated from field: int64 auth_key_id = 1;
   */
  abstract readonly authKeyId: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.GetAuthKeyResponse
 */
export abstract class GetAuthKeyResponse {
  /**
   * @generated from field: tech.monstrs.chats_system.authkey.v1alpha1.AuthKey auth_key = 1;
   */
  abstract readonly authKey?: AuthKey
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.GetAuthKeyConnectionRequest
 */
export abstract class GetAuthKeyConnectionRequest {
  /**
   * @generated from field: int64 auth_key_id = 1;
   */
  abstract readonly authKeyId: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.GetAuthKeyConnectionResponse
 */
export abstract class GetAuthKeyConnectionResponse {
  /**
   * @generated from field: tech.monstrs.chats_system.authkey.v1alpha1.AuthKeyConnection auth_key_connection = 1;
   */
  abstract readonly authKeyConnection?: AuthKeyConnection
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.GetAuthKeyUserRequest
 */
export abstract class GetAuthKeyUserRequest {
  /**
   * @generated from field: int64 auth_key_id = 1;
   */
  abstract readonly authKeyId: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.GetAuthKeyUserResponse
 */
export abstract class GetAuthKeyUserResponse {
  /**
   * @generated from field: tech.monstrs.chats_system.authkey.v1alpha1.AuthKeyUser auth_key_user = 1;
   */
  abstract readonly authKeyUser?: AuthKeyUser
}