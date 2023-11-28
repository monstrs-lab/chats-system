// @generated by protoc-gen-interfaces 0.0.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/auth/v1alpha1/auth.service.proto (package tech.monstrs.chats_system.auth.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { Authorization } from './auth.types_pb.js'
import type { SentCode }      from './auth.types_pb.js'

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.SendCodeRequest
 */
export interface SendCodeRequest {
  /**
   * @generated from field: string phone = 1;
   */
  phone: string
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.SendCodeResponse
 */
export interface SendCodeResponse {
  /**
   * @generated from field: tech.monstrs.chats_system.auth.v1alpha1.SentCode sent_code = 1;
   */
  sentCode?: SentCode
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.SignInRequest
 */
export interface SignInRequest {
  /**
   * @generated from field: string phone = 1;
   */
  phone: string

  /**
   * @generated from field: string phone_code = 2;
   */
  phoneCode: string

  /**
   * @generated from field: string phone_code_hash = 3;
   */
  phoneCodeHash: string
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.SignInResponse
 */
export interface SignInResponse {
  /**
   * @generated from field: optional tech.monstrs.chats_system.auth.v1alpha1.Authorization authorization = 1;
   */
  authorization?: Authorization
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.SignUpRequest
 */
export interface SignUpRequest {
  /**
   * @generated from field: string phone = 1;
   */
  phone: string

  /**
   * @generated from field: string phone_code_hash = 2;
   */
  phoneCodeHash: string

  /**
   * @generated from field: string first_name = 3;
   */
  firstName: string

  /**
   * @generated from field: string last_name = 4;
   */
  lastName: string
}

/**
 * @generated from message tech.monstrs.chats_system.auth.v1alpha1.SignUpResponse
 */
export interface SignUpResponse {
  /**
   * @generated from field: optional tech.monstrs.chats_system.auth.v1alpha1.Authorization authorization = 1;
   */
  authorization?: Authorization
}
