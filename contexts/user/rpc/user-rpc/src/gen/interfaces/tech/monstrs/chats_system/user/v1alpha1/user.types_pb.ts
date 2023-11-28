// @generated by protoc-gen-interfaces 0.0.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/user/v1alpha1/user.types.proto (package tech.monstrs.chats_system.user.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * @generated from message tech.monstrs.chats_system.user.v1alpha1.User
 */
export interface User {
  /**
   * @generated from field: int64 id = 1;
   */
  id: bigint

  /**
   * @generated from field: int64 secret_key_id = 2;
   */
  secretKeyId: bigint

  /**
   * @generated from field: string first_name = 3;
   */
  firstName: string

  /**
   * @generated from field: string last_name = 4;
   */
  lastName: string

  /**
   * @generated from field: string phone = 5;
   */
  phone: string

  /**
   * @generated from field: optional int64 access_hash = 6;
   */
  accessHash?: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.user.v1alpha1.InputContact
 */
export interface InputContact {
  /**
   * @generated from field: int64 client_id = 1;
   */
  clientId: bigint

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
 * @generated from message tech.monstrs.chats_system.user.v1alpha1.ImportedContact
 */
export interface ImportedContact {
  /**
   * @generated from field: int64 client_id = 1;
   */
  clientId: bigint

  /**
   * @generated from field: int64 user_id = 2;
   */
  userId: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.user.v1alpha1.ImportedContacts
 */
export interface ImportedContacts {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.user.v1alpha1.ImportedContact imported = 1;
   */
  imported: ImportedContact[]

  /**
   * @generated from field: repeated tech.monstrs.chats_system.user.v1alpha1.User users = 2;
   */
  users: User[]
}
