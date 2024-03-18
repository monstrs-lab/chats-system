import type { CreateUserRequest } from '@chats-system/users-rpc/interfaces'

import { IsNotEmpty }             from 'class-validator'
import { IsString }               from 'class-validator'
import { IsUUID }                 from 'class-validator'

export class CreateUserPayload {
  constructor(private readonly request: CreateUserRequest) {}

  @IsUUID(4)
  get externalId(): string {
    return this.request.externalId
  }

  @IsString()
  @IsNotEmpty()
  get firstName(): string {
    return this.request.firstName
  }

  @IsString()
  @IsNotEmpty()
  get lastName(): string {
    return this.request.lastName
  }
}
