// @generated by protoc-gen-interfaces 0.0.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/auth/v1alpha1/auth.types.proto (package tech.monstrs.chats_system.auth.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.CodeSettings
 */
export interface CodeSettings {
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
  logoutTokens: Uint8Array[]
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.SentCode
 */
export interface SentCode {
  /**
   * @generated from field: string phone_code_hash = 1;
   */
  phoneCodeHash: string

  /**
   * @generated from field: optional int32 timeout = 2;
   */
  timeout?: number
}
