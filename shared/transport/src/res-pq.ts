import * as Primitive from '@monstrs/mtproto-tl-primitives'
import { TLObject }   from '@monstrs/mtproto-tl-core'

export interface ResPQParams {
  nonce: bigint
  serverNonce: bigint
  pq: Buffer
  serverPublicKeyFingerprints: Array<bigint>
}

export class ResPQ extends TLObject {
  override constructorId: number = 0x05162463

  override type: string = 'ResPQ'

  nonce!: bigint

  serverNonce!: bigint

  pq!: Buffer

  serverPublicKeyFingerprints!: Array<bigint>

  constructor(params: ResPQParams) {
    super(params)
    this.nonce = params.nonce
    this.serverNonce = params.serverNonce
    this.pq = params.pq
    this.serverPublicKeyFingerprints = params.serverPublicKeyFingerprints
  }

  static override async read(b: Primitive.BytesIO): Promise<ResPQ> {
    const nonce = await Primitive.Int128.read(b)
    const serverNonce = await Primitive.Int128.read(b)
    const pq = await Primitive.Bytes.read(b)
    await Primitive.Int.read(b)
    const serverPublicKeyFingerprints = await Primitive.Vector.read(b, Primitive.Long)
    return new ResPQ({ nonce, serverNonce, pq, serverPublicKeyFingerprints })
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
    if (this.pq !== undefined) {
      b.write(Primitive.Bytes.write(this.pq))
    }
    if (this.serverPublicKeyFingerprints) {
      b.write(Primitive.Vector.write(this.serverPublicKeyFingerprints, Primitive.Long))
    }
    return b.buffer
  }
}
