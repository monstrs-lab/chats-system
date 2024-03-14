import type { GetAuthKeyRequest } from '@chats-system/authkey-rpc/interfaces'

export class GetAuthKeyPayload {
  constructor(private readonly request: GetAuthKeyRequest) {}

  get authKeyId(): bigint {
    return this.request.authKeyId
  }
}
