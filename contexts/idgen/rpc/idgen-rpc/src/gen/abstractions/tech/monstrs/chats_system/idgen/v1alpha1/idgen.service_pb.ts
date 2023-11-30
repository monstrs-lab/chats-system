// @generated by protoc-gen-abstractions 0.0.1 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/idgen/v1alpha1/idgen.service.proto (package tech.monstrs.chats_system.idgen.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * @generated from enum tech.monstrs.chats_system.idgen.v1alpha1.InputIdType
 */
export enum InputIdType {
  /**
   * @generated from enum value: ID = 0;
   */
  ID = 0,

  /**
   * @generated from enum value: IDS = 1;
   */
  IDS = 1,

  /**
   * @generated from enum value: SEQ_ID = 2;
   */
  SEQ_ID = 2,

  /**
   * @generated from enum value: SEQ_IDS = 3;
   */
  SEQ_IDS = 3,
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.IdValue
 */
export abstract class IdValue {
  /**
   * @generated from field: int64 id = 1;
   */
  abstract readonly id: bigint

  /**
   * @generated from field: repeated int64 ids = 2;
   */
  abstract readonly ids: bigint[]
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.InputId
 */
export abstract class InputId {
  /**
   * @generated from field: string key = 1;
   */
  abstract readonly key: string

  /**
   * @generated from field: tech.monstrs.chats_system.idgen.v1alpha1.InputIdType type = 2;
   */
  abstract readonly type: InputIdType

  /**
   * @generated from field: optional int32 num = 3;
   */
  abstract readonly num?: number

  /**
   * @generated from field: optional int32 n = 4;
   */
  abstract readonly n?: number
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.GetNextIdRequest
 */
export abstract class GetNextIdRequest {}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.GetNextIdResponse
 */
export abstract class GetNextIdResponse {
  /**
   * @generated from field: int64 next_id = 1;
   */
  abstract readonly nextId: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.GetCurrentSeqIdRequest
 */
export abstract class GetCurrentSeqIdRequest {
  /**
   * @generated from field: tech.monstrs.chats_system.idgen.v1alpha1.InputId id = 1;
   */
  abstract readonly id?: InputId
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.GetCurrentSeqIdResponse
 */
export abstract class GetCurrentSeqIdResponse {
  /**
   * @generated from field: int64 seq_id = 1;
   */
  abstract readonly seqId: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.SetCurrentSeqIdRequest
 */
export abstract class SetCurrentSeqIdRequest {
  /**
   * @generated from field: string key = 1;
   */
  abstract readonly key: string

  /**
   * @generated from field: int64 id = 2;
   */
  abstract readonly id: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.SetCurrentSeqIdResponse
 */
export abstract class SetCurrentSeqIdResponse {
  /**
   * @generated from field: bool success = 1;
   */
  abstract readonly success: boolean
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.GetNextSeqIdRequest
 */
export abstract class GetNextSeqIdRequest {
  /**
   * @generated from field: string key = 1;
   */
  abstract readonly key: string
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.GetNextSeqIdResponse
 */
export abstract class GetNextSeqIdResponse {
  /**
   * @generated from field: int64 seq_id = 1;
   */
  abstract readonly seqId: bigint
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.GetNextIdValuesRequest
 */
export abstract class GetNextIdValuesRequest {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.idgen.v1alpha1.InputId input_ids = 1;
   */
  abstract readonly inputIds: InputId[]
}

/**
 * @generated from message tech.monstrs.chats_system.idgen.v1alpha1.GetNextIdValuesResponse
 */
export abstract class GetNextIdValuesResponse {
  /**
   * @generated from field: repeated tech.monstrs.chats_system.idgen.v1alpha1.IdValue id_values = 1;
   */
  abstract readonly idValues: IdValue[]
}
