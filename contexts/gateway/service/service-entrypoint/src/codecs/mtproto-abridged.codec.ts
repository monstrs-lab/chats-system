export class MTProtoAbridgedCodec {
    receive(buf: Buffer): Buffer {
        let length = buf[0]

        if (length >= 127) {
            length = Buffer.concat([buf.subarray(0, 3), Buffer.alloc(1)])
                        .readInt32LE(0);

        }

        const data = buf.subarray(0, length << 2)

        return data.subarray(1, data.length)
    }
}