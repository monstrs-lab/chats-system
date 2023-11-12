import { MTProtoRawMessage } from '@chats-system/tl-types'

export class MTProtoAbridgedCodec {
  receive(payload: Buffer): MTProtoRawMessage {
    let length = payload[0]

    if (length >= 127) {
      length = Buffer.concat([payload.subarray(0, 3), Buffer.alloc(1)]).readInt32LE(0)
    }

    const data = payload.subarray(1, (length << 2) + 1)

    return MTProtoRawMessage.decode(data)
  }
}
