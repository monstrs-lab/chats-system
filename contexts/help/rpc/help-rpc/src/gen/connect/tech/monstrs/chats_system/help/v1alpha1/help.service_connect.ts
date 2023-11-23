// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/help/v1alpha1/help.service.proto (package tech.monstrs.chats_system.help.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodKind }        from '@bufbuild/protobuf'

import { GetConfigRequest }  from './help.service_pb.js'
import { GetConfigResponse } from './help.service_pb.js'

/**
 * @generated from service tech.monstrs.chats_system.help.v1alpha1.HelpService
 */
export const HelpService = {
  typeName: 'tech.monstrs.chats_system.help.v1alpha1.HelpService',
  methods: {
    /**
     * @generated from rpc tech.monstrs.chats_system.help.v1alpha1.HelpService.getConfig
     */
    getConfig: {
      name: 'getConfig',
      I: GetConfigRequest,
      O: GetConfigResponse,
      kind: MethodKind.Unary,
    },
  },
} as const
