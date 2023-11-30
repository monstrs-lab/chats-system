// @generated by protoc-gen-interfaces 0.0.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/user/v1alpha1/user.service.proto (package tech.monstrs.chats_system.user.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { ImportedContacts } from './user.types_pb.js'
import type { InputContact }     from './user.types_pb.js'
import type { User }             from './user.types_pb.js'
import type { UserContact }      from './user.types_pb.js'

/**
 * @generated from message tech.monstrs.chats_system.user.v1alpha1.CreateUserRequest
 */
export interface CreateUserRequest {
  /**
   * @generated from field: int64 secret_key_id = 1;
   */
  secretKeyId: bigint

  /**
   * @generated from field: string phone = 2;
   */
  phone: string

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
 * @generated from message tech.monstrs.chats_system.user.v1alpha1.CreateUserResponse
 */
export interface CreateUserResponse {
  /**
   * @generated from field: tech.monstrs.chats_system.user.v1alpha1.User user = 1;
   */
  user?: User
}

/**
 * @generated from message tech.monstrs.chats_system.user.v1alpha1.GetUserRequest
 */
export interface GetUserRequest {
  /**
   * @generated from field: optional int64 user_id = 1;
   */
  userId?: bigint

  /**
   * @generated from field: optional string phone = 2;
   */
  phone?: string
}

/**
 * @generated from message tech.monstrs.chats_system.user.v1alpha1.GetUserResponse
 */
export interface GetUserResponse {
  /**
   * @generated from field: tech.monstrs.chats_system.user.v1alpha1.User user = 1;
   */
  user?: User
}

/**
 * @generated from message tech.monstrs.chats_system.user.v1alpha1.ImportContactsRequest
 */
export interface ImportContactsRequest {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.user.v1alpha1.InputContact contacts = 1;
   */
  contacts: InputContact[]
}

/**
 * @generated from message tech.monstrs.chats_system.user.v1alpha1.ImportContactsResponse
 */
export interface ImportContactsResponse {
  /**
   * @generated from field: tech.monstrs.chats_system.user.v1alpha1.ImportedContacts imported_contacts = 1;
   */
  importedContacts?: ImportedContacts
}

/**
 * @generated from message tech.monstrs.chats_system.user.v1alpha1.GetUserContactsRequest
 */
export interface GetUserContactsRequest {
  /**
   * @generated from field: int64 user_id = 1;
   */
  userId: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.user.v1alpha1.GetUserContactsResponse
 */
export interface GetUserContactsResponse {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.user.v1alpha1.UserContact user_contacts = 1;
   */
  userContacts: UserContact[]
}
