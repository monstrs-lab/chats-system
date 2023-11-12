import { Buffer } from 'buffer'

interface MessageBase {
  Encode(): Uint8Array
  Decode(b: Uint8Array): void
}

class MTPRawMessage implements MessageBase {
  private connType: number
  private authKeyId: bigint
  private quickAckId: number
  private payload: Uint8Array

  constructor(authKeyId: bigint, quickAckId: number, connType: number) {
    this.connType = connType
    this.authKeyId = authKeyId
    this.quickAckId = quickAckId
  }

  public String(): string {
    return `{conn_type: ${this.connType}, auth_key_id: ${this.authKeyId}, quick_ack_id: ${this.quickAckId}, payload_len: ${this.payload.length}}`
  }

  public ConnType(): number {
    return this.connType
  }

  public AuthKeyId(): bigint {
    return this.authKeyId
  }

  public QuickAckId(): number {
    return this.quickAckId
  }

  public Encode(): Uint8Array {
    return this.payload
  }

  public Decode(b: Uint8Array): void {
    this.payload = b
  }

  public DebugString(): string {
    return `{"conn_type":${this.connType},"auth_key_id":${this.authKeyId},"quick_ack_id":${this.quickAckId},"payload_len":${this.payload.length}}`
  }
}

class UnencryptedRawMessage implements MessageBase {
  private authKeyId: bigint
  private messageId: bigint
  private messageData: Uint8Array

  constructor() {
    this.authKeyId = BigInt(0)
  }

  public Encode(): Uint8Array {
    const x = new EncodeBuf(20 + this.messageData.length)
    x.Long(BigInt(0))
    this.messageId = GenerateMessageId()
    x.Long(this.messageId)
    x.Int(this.messageData.length)
    x.Bytes(this.messageData)
    return x.buf
  }

  public Decode(b: Uint8Array): void {
    const dbuf = new DecodeBuf(b)
    this.messageId = dbuf.Long()
    const messageLen = dbuf.Int()
    if (messageLen !== dbuf.size - 12) {
      throw new Error(`invalid UnencryptedRawMessage len: ${messageLen} (need ${dbuf.size - 12})`)
    }
    this.messageData = dbuf.Bytes(messageLen)
  }
}

class EncryptedRawMessage implements MessageBase {
  private authKeyId: bigint
  private msgKey: Uint8Array
  private encryptedData: Uint8Array

  constructor(authKeyId: bigint) {
    this.authKeyId = authKeyId
  }

  public Encode(): Uint8Array {
    const x = new EncodeBuf(24 + this.encryptedData.length)
    x.Long(this.authKeyId)
    x.Bytes(this.msgKey)
    x.Bytes(this.encryptedData)
    return x.buf
  }

  public Decode(b: Uint8Array): void {
    const dbuf = new DecodeBuf(b)
    this.msgKey = dbuf.Bytes(16)
    this.encryptedData = dbuf.Bytes(b.length - 16)
  }
}

class EncodeBuf {
  private buf: Uint8Array
  private pos: number

  constructor(size: number) {
    this.buf = new Uint8Array(size)
    this.pos = 0
  }

  public Long(value: bigint): void {
    const buffer = Buffer.alloc(8)
    buffer.writeBigInt64BE(value)
    this.buf.set(buffer, this.pos)
    this.pos += 8
  }

  public Int(value: number): void {
    const buffer = Buffer.alloc(4)
    buffer.writeInt32BE(value)
    this.buf.set(buffer, this.pos)
    this.pos += 4
  }

  public Bytes(value: Uint8Array): void {
    this.buf.set(value, this.pos)
    this.pos += value.length
  }
}

class DecodeBuf {
  private buf: Uint8Array
  private pos: number
  private err: Error | null

  constructor(buf: Uint8Array) {
    this.buf = buf
    this.pos = 0
    this.err = null
  }

  public get size(): number {
    return this.buf.length
  }

  public Long(): bigint {
    const buffer = this.buf.slice(this.pos, this.pos + 8)
    this.pos += 8
    return Buffer.from(buffer).readBigInt64BE()
  }

  public Int(): number {
    const buffer = this.buf.slice(this.pos, this.pos + 4)
    this.pos += 4
    return Buffer.from(buffer).readInt32BE()
  }

  public Bytes(length: number): Uint8Array {
    const buffer = this.buf.slice(this.pos, this.pos + length)
    this.pos += length
    return buffer
  }
}

function GenerateMessageId(): bigint {
  // implementation of GenerateMessageId function
}

function NewMTPRawMessage(authKeyId: bigint, quickAckId: number, connType: number): MTPRawMessage {
  return new MTPRawMessage(authKeyId, quickAckId, connType)
}

function NewUnencryptedRawMessage(): UnencryptedRawMessage {
  return new UnencryptedRawMessage()
}

function NewEncryptedRawMessage(authKeyId: bigint): EncryptedRawMessage {
  return new EncryptedRawMessage(authKeyId)
}
