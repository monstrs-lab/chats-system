import type { CreateAuthKeyUserRequest } from '@chats-system/authkey-rpc/interfaces'

export class CreateAuthKeyUserPayload {
  constructor(private readonly request: CreateAuthKeyUserRequest) {}

  get authKeyId(): bigint {
    return this.request.authKeyId
  }

  get userId(): bigint {
    return this.request.userId
  }
}
