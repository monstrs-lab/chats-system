import { MTProtoRawMessage }  from '@chats-system/tl-types'
import { fromBigIntToBuffer } from '@chats-system/tl-types'

export class MTProtoAbridgedCodec {
  receive(payload: Buffer): MTProtoRawMessage {
    let length = payload[0]

    if (length >= 127) {
      length = Buffer.concat([payload.subarray(0, 3), Buffer.alloc(1)]).readInt32LE(0)
    }

    const data = payload.subarray(1, (length << 2) + 1)

    return MTProtoRawMessage.decode(data)
  }

  send(data: Buffer): Buffer {
    //const data = message.encode()

    let length = data.length >> 2

    if (length < 127) {
      const lengthBuffer = Buffer.alloc(1)

      lengthBuffer.writeUInt8(length, 0)

      return Buffer.concat([lengthBuffer, data])
    }

    const lengthBuffer = Buffer.concat([
      Buffer.from('7f', 'hex'),
      fromBigIntToBuffer(BigInt(length), 3),
    ])

    return Buffer.concat([lengthBuffer, data])
  }
}
