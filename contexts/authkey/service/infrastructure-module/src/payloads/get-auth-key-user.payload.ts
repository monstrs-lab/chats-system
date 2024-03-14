import type { GetAuthKeyUserRequest } from '@chats-system/authkey-rpc/interfaces'

export class GetAuthKeyUserPayload {
  constructor(private readonly request: GetAuthKeyUserRequest) {}

  get authKeyId(): bigint {
    return this.request.authKeyId
  }
}
