import * as Primitive from '@monstrs/mtproto-tl-primitives'
import { TLObject }   from '@monstrs/mtproto-tl-core'

export interface PQInnerDataParams {
  pq: Buffer
  p: Buffer
  q: Buffer
  nonce: bigint
  serverNonce: bigint
  newNonce: bigint
}

export class PQInnerData extends TLObject {
  override constructorId: number = 0xa9f55f95

  pq!: Buffer

  p!: Buffer

  q!: Buffer

  nonce!: bigint

  serverNonce!: bigint

  newNonce!: bigint

  constructor(params: PQInnerDataParams) {
    super(params)
    this.pq = params.pq
    this.p = params.p
    this.q = params.q
    this.nonce = params.nonce
    this.serverNonce = params.serverNonce
    this.newNonce = params.newNonce
  }

  static override async read(b: Primitive.BytesIO): Promise<PQInnerData> {
    const pq = await Primitive.Bytes.read(b)
    const p = await Primitive.Bytes.read(b)
    const q = await Primitive.Bytes.read(b)
    const nonce = await Primitive.Int128.read(b)
    const serverNonce = await Primitive.Int128.read(b)
    const newNonce = await Primitive.Int256.read(b)
    return new PQInnerData({ pq, p, q, nonce, serverNonce, newNonce })
  }

  write(): Buffer {
    const b: Primitive.BytesIO = new Primitive.BytesIO()
    b.write(Primitive.Int.write(this.constructorId, false))
    if (this.pq !== undefined) {
      b.write(Primitive.Bytes.write(this.pq))
    }
    if (this.p !== undefined) {
      b.write(Primitive.Bytes.write(this.p))
    }
    if (this.q !== undefined) {
      b.write(Primitive.Bytes.write(this.q))
    }
    if (this.nonce !== undefined) {
      b.write(Primitive.Int128.write(this.nonce))
    }
    if (this.serverNonce !== undefined) {
      b.write(Primitive.Int128.write(this.serverNonce))
    }
    if (this.newNonce !== undefined) {
      b.write(Primitive.Int256.write(this.newNonce))
    }
    return b.buffer
  }
}
