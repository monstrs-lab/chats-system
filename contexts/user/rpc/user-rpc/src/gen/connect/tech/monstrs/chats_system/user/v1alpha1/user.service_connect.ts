// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=ts"
// @generated from file tech/monstrs/chats_system/user/v1alpha1/user.service.proto (package tech.monstrs.chats_system.user.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodKind }                                                             from '@bufbuild/protobuf'

import { CreateUserRequest }                                                      from './user.service_pb.js'

import { CreateUserResponse }                                  from './user.service_pb.js'

import { GetUserRequest }                  from './user.service_pb.js'

import { GetUserResponse } from './user.service_pb.js'

/**
 * @generated from service tech.monstrs.chats_system.user.v1alpha1.UserService
 */
export const UserService = {
  typeName: 'tech.monstrs.chats_system.user.v1alpha1.UserService',
  methods: {
    /**
     * @generated from rpc tech.monstrs.chats_system.user.v1alpha1.UserService.createUser
     */
    createUser: {
      name: 'createUser',
      I: CreateUserRequest,
      O: CreateUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tech.monstrs.chats_system.user.v1alpha1.UserService.getUser
     */
    getUser: {
      name: 'getUser',
      I: GetUserRequest,
      O: GetUserResponse,
      kind: MethodKind.Unary,
    },
  },
} as const
