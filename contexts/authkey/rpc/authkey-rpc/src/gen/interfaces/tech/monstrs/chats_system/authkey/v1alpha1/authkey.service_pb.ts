// @generated by protoc-gen-interfaces 0.0.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/authkey/v1alpha1/authkey.service.proto (package tech.monstrs.chats_system.authkey.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { AuthKey }           from './authkey.types_pb.js'
import type { AuthKeyConnection } from './authkey.types_pb.js'
import type { AuthKeyType }       from './authkey.types_pb.js'
import type { AuthKeyUser }       from './authkey.types_pb.js'

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.CreateAuthKeyRequest
 */
export interface CreateAuthKeyRequest {
  /**
   * @generated from field: int64 auth_key_id = 1;
   */
  authKeyId: bigint

  /**
   * @generated from field: bytes auth_key = 2;
   */
  authKey: Uint8Array

  /**
   * @generated from field: tech.monstrs.chats_system.authkey.v1alpha1.AuthKeyType auth_key_type = 3;
   */
  authKeyType: AuthKeyType
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.CreateAuthKeyResponse
 */
export interface CreateAuthKeyResponse {
  /**
   * @generated from field: tech.monstrs.chats_system.authkey.v1alpha1.AuthKey auth_key = 1;
   */
  authKey?: AuthKey
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.CreateAuthKeyUserRequest
 */
export interface CreateAuthKeyUserRequest {
  /**
   * @generated from field: int64 auth_key_id = 1;
   */
  authKeyId: bigint

  /**
   * @generated from field: int64 user_id = 2;
   */
  userId: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.CreateAuthKeyUserResponse
 */
export interface CreateAuthKeyUserResponse {
  /**
   * @generated from field: int64 hash = 1;
   */
  hash: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.CreateAuthKeyConnectionRequest
 */
export interface CreateAuthKeyConnectionRequest {
  /**
   * @generated from field: int64 auth_key_id = 1;
   */
  authKeyId: bigint

  /**
   * @generated from field: string client_ip = 2;
   */
  clientIp: string

  /**
   * @generated from field: int32 layer = 3;
   */
  layer: number

  /**
   * @generated from field: int32 api_id = 4;
   */
  apiId: number

  /**
   * @generated from field: string device_model = 5;
   */
  deviceModel: string

  /**
   * @generated from field: string system_version = 6;
   */
  systemVersion: string

  /**
   * @generated from field: string app_version = 7;
   */
  appVersion: string

  /**
   * @generated from field: string system_lang_code = 8;
   */
  systemLangCode: string

  /**
   * @generated from field: string lang_pack = 9;
   */
  langPack: string

  /**
   * @generated from field: string lang_code = 10;
   */
  langCode: string

  /**
   * @generated from field: optional string params = 11;
   */
  params?: string
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.CreateAuthKeyConnectionResponse
 */
export interface CreateAuthKeyConnectionResponse {
  /**
   * @generated from field: tech.monstrs.chats_system.authkey.v1alpha1.AuthKeyConnection auth_key_connection = 1;
   */
  authKeyConnection?: AuthKeyConnection
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.UpdateAuthKeyConnectionRequest
 */
export interface UpdateAuthKeyConnectionRequest {
  /**
   * @generated from field: int64 auth_key_id = 1;
   */
  authKeyId: bigint

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
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.UpdateAuthKeyConnectionResponse
 */
export interface UpdateAuthKeyConnectionResponse {
  /**
   * @generated from field: tech.monstrs.chats_system.authkey.v1alpha1.AuthKeyConnection auth_key_connection = 1;
   */
  authKeyConnection?: AuthKeyConnection
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.GetAuthKeyRequest
 */
export interface GetAuthKeyRequest {
  /**
   * @generated from field: int64 auth_key_id = 1;
   */
  authKeyId: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.GetAuthKeyResponse
 */
export interface GetAuthKeyResponse {
  /**
   * @generated from field: tech.monstrs.chats_system.authkey.v1alpha1.AuthKey auth_key = 1;
   */
  authKey?: AuthKey
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.GetAuthKeyConnectionRequest
 */
export interface GetAuthKeyConnectionRequest {
  /**
   * @generated from field: int64 auth_key_id = 1;
   */
  authKeyId: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.GetAuthKeyConnectionResponse
 */
export interface GetAuthKeyConnectionResponse {
  /**
   * @generated from field: tech.monstrs.chats_system.authkey.v1alpha1.AuthKeyConnection auth_key_connection = 1;
   */
  authKeyConnection?: AuthKeyConnection
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.GetAuthKeyUserRequest
 */
export interface GetAuthKeyUserRequest {
  /**
   * @generated from field: int64 auth_key_id = 1;
   */
  authKeyId: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.GetAuthKeyUserResponse
 */
export interface GetAuthKeyUserResponse {
  /**
   * @generated from field: tech.monstrs.chats_system.authkey.v1alpha1.AuthKeyUser auth_key_user = 1;
   */
  authKeyUser?: AuthKeyUser
}
