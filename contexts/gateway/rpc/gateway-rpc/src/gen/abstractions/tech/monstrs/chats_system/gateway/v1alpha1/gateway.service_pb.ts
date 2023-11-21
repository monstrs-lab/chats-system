// @generated by protoc-gen-abstractions 0.0.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/gateway/v1alpha1/gateway.service.proto (package tech.monstrs.chats_system.gateway.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * @generated from message tech.monstrs.chats_system.gateway.v1alpha1.SendDataRequest
 */
export abstract class SendDataRequest {
  /**
   * @generated from field: int64 auth_key_id = 1;
   */
  abstract readonly authKeyId: bigint;

  /**
   * @generated from field: int64 session_id = 2;
   */
  abstract readonly sessionId: bigint;

  /**
   * @generated from field: bytes payload = 3;
   */
  abstract readonly payload: Uint8Array;

}

/**
 * @generated from message tech.monstrs.chats_system.gateway.v1alpha1.SendDataResponse
 */
export abstract class SendDataResponse {
}

