// @generated by protoc-gen-abstractions 0.0.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/core/v1alpha1/rpc-error.types.proto (package tech.monstrs.chats_system.core.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * @generated from message tech.monstrs.chats_system.core.v1alpha1.RpcError
 */
export abstract class RpcError {
  /**
   * @generated from field: string id = 1;
   */
  abstract readonly id: string;

  /**
   * @generated from field: int32 code = 2;
   */
  abstract readonly code: number;

  /**
   * @generated from field: string message = 3;
   */
  abstract readonly message: string;

  /**
   * @generated from field: string name = 4;
   */
  abstract readonly name: string;

}

