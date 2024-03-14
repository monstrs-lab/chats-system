import type { CreateAuthKeyRequest } from '@chats-system/authkey-rpc/interfaces'

export class CreateAuthKeyPayload {
  constructor(private readonly request: CreateAuthKeyRequest) {}

  get id(): bigint {
    return this.request.id
  }

  get key(): Buffer {
    return Buffer.from(this.request.key)
  }
}
