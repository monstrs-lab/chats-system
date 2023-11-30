// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/idgen/v1alpha1/idgen.service.proto (package tech.monstrs.chats_system.idgen.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodKind }                                                                                                                                                                                                                        from '@bufbuild/protobuf'

import { GetCurrentSeqIdRequest }                                                                                                                                                                                                            from './idgen.service_pb.js'

import { GetCurrentSeqIdResponse }                                                                                                                                                                                   from './idgen.service_pb.js'

import { GetNextIdRequest }                                                                                                                                                                 from './idgen.service_pb.js'

import { GetNextIdResponse }                                                                                                                                              from './idgen.service_pb.js'

import { GetNextIdValuesRequest }                                                                                                                      from './idgen.service_pb.js'

import { GetNextIdValuesResponse }                                                                                             from './idgen.service_pb.js'

import { GetNextSeqIdRequest }                                                                        from './idgen.service_pb.js'

import { GetNextSeqIdResponse }                                                  from './idgen.service_pb.js'

import { SetCurrentSeqIdRequest }                          from './idgen.service_pb.js'

import { SetCurrentSeqIdResponse } from './idgen.service_pb.js'

/**
 * @generated from service tech.monstrs.chats_system.idgen.v1alpha1.IdGenService
 */
export const IdGenService = {
  typeName: 'tech.monstrs.chats_system.idgen.v1alpha1.IdGenService',
  methods: {
    /**
     * @generated from rpc tech.monstrs.chats_system.idgen.v1alpha1.IdGenService.getNextId
     */
    getNextId: {
      name: 'getNextId',
      I: GetNextIdRequest,
      O: GetNextIdResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tech.monstrs.chats_system.idgen.v1alpha1.IdGenService.getCurrentSeqId
     */
    getCurrentSeqId: {
      name: 'getCurrentSeqId',
      I: GetCurrentSeqIdRequest,
      O: GetCurrentSeqIdResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tech.monstrs.chats_system.idgen.v1alpha1.IdGenService.setCurrentSeqId
     */
    setCurrentSeqId: {
      name: 'setCurrentSeqId',
      I: SetCurrentSeqIdRequest,
      O: SetCurrentSeqIdResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tech.monstrs.chats_system.idgen.v1alpha1.IdGenService.getNextSeqId
     */
    getNextSeqId: {
      name: 'getNextSeqId',
      I: GetNextSeqIdRequest,
      O: GetNextSeqIdResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tech.monstrs.chats_system.idgen.v1alpha1.IdGenService.getNextIdValues
     */
    getNextIdValues: {
      name: 'getNextIdValues',
      I: GetNextIdValuesRequest,
      O: GetNextIdValuesResponse,
      kind: MethodKind.Unary,
    },
  },
} as const
