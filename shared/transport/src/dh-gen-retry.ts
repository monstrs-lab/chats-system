import * as Primitive from '@monstrs/mtproto-tl-primitives'
import { TLObject }   from '@monstrs/mtproto-tl-core'

export interface DhGenRetryParams {
  nonce: bigint
  serverNonce: bigint
  newNonceHash2: bigint
}

export class DhGenRetry extends TLObject {
  override constructorId: number = 0x46dc1fb9

  nonce!: bigint

  serverNonce!: bigint

  newNonceHash2!: bigint

  constructor(params: DhGenRetryParams) {
    super(params)
    this.nonce = params.nonce
    this.serverNonce = params.serverNonce
    this.newNonceHash2 = params.newNonceHash2
  }

  static override async read(b: Primitive.BytesIO): Promise<DhGenRetry> {
    const nonce = await Primitive.Int128.read(b)
    const serverNonce = await Primitive.Int128.read(b)
    const newNonceHash2 = await Primitive.Int128.read(b)
    return new DhGenRetry({ nonce, serverNonce, newNonceHash2 })
  }

  write(): Buffer {
    const b: Primitive.BytesIO = new Primitive.BytesIO()
    b.write(Primitive.Int.write(this.constructorId, false))
    if (this.nonce !== undefined) {
      b.write(Primitive.Int128.write(this.nonce))
    }
    if (this.serverNonce !== undefined) {
      b.write(Primitive.Int128.write(this.serverNonce))
    }
    if (this.newNonceHash2 !== undefined) {
      b.write(Primitive.Int128.write(this.newNonceHash2))
    }
    return b.buffer
  }
}
