import type { SendMessageRequest } from '@chats-system/messages-rpc/interfaces'

import { IsNotEmpty }              from 'class-validator'
import { IsString }                from 'class-validator'
import { IsEnum }                  from 'class-validator'

import { PeerType }                from '@chats-system/messages-rpc/interfaces'

export class SendMessagePayload {
  constructor(private readonly request: SendMessageRequest) {}

  get randomId(): bigint {
    return this.request.randomId
  }

  get fromId(): bigint {
    return this.request.fromId
  }

  @IsEnum(PeerType)
  get peerType(): PeerType {
    return this.request.peerType
  }

  get peerId(): bigint {
    return this.request.peerId
  }

  @IsString()
  @IsNotEmpty()
  get message(): string {
    return this.request.message
  }
}
