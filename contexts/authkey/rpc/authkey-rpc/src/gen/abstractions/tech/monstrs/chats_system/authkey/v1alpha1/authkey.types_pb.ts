// @generated by protoc-gen-abstractions 0.0.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/authkey/v1alpha1/authkey.types.proto (package tech.monstrs.chats_system.authkey.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * @generated from enum tech.monstrs.chats_system.authkey.v1alpha1.AuthKeyType
 */
export enum AuthKeyType {
  /**
   * @generated from enum value: UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * @generated from enum value: PERM = 1;
   */
  PERM = 1,

  /**
   * @generated from enum value: TEMP = 2;
   */
  TEMP = 2,

  /**
   * @generated from enum value: MEDIA_TEMP = 3;
   */
  MEDIA_TEMP = 3,
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.AuthKey
 */
export abstract class AuthKey {
  /**
   * @generated from field: int64 auth_key_id = 1;
   */
  abstract readonly authKeyId: bigint

  /**
   * @generated from field: bytes auth_key = 2;
   */
  abstract readonly authKey: Uint8Array

  /**
   * @generated from field: tech.monstrs.chats_system.authkey.v1alpha1.AuthKeyType auth_key_type = 3;
   */
  abstract readonly authKeyType: AuthKeyType

  /**
   * @generated from field: int64 perm_auth_key_id = 4;
   */
  abstract readonly permAuthKeyId: bigint

  /**
   * @generated from field: int64 temp_auth_key_id = 5;
   */
  abstract readonly tempAuthKeyId: bigint

  /**
   * @generated from field: int64 media_temp_auth_key_id = 6;
   */
  abstract readonly mediaTempAuthKeyId: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.AuthKeyUser
 */
export abstract class AuthKeyUser {
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
 * @generated from message tech.monstrs.chats_system.authkey.v1alpha1.AuthKeyConnection
 */
export abstract class AuthKeyConnection {
  /**
   * @generated from field: int64 auth_key_id = 1;
   */
  abstract readonly authKeyId: bigint

  /**
   * @generated from field: int32 layer = 2;
   */
  abstract readonly layer: number

  /**
   * @generated from field: int32 api_id = 3;
   */
  abstract readonly apiId: number

  /**
   * @generated from field: string client_ip = 4;
   */
  abstract readonly clientIp: string

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
