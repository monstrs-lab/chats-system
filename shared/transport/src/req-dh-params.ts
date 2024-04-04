import * as Primitive from '@monstrs/mtproto-tl-primitives'
import { TLObject }   from '@monstrs/mtproto-tl-core'

export interface ReqDHParamsParams {
  nonce: bigint
  serverNonce: bigint
  p: Buffer
  q: Buffer
  publicKeyFingerprint: bigint
  encryptedData: Buffer
}

export class ReqDHParams extends TLObject {
  override constructorId: number = 0xd712e4be

  override type: string = 'ServerDHParams'

  nonce!: bigint

  serverNonce!: bigint

  p!: Buffer

  q!: Buffer

  publicKeyFingerprint!: bigint

  encryptedData!: Buffer

  constructor(params: ReqDHParamsParams) {
    super(params)
    this.nonce = params.nonce
    this.serverNonce = params.serverNonce
    this.p = params.p
    this.q = params.q
    this.publicKeyFingerprint = params.publicKeyFingerprint
    this.encryptedData = params.encryptedData
  }

  static override async read(b: Primitive.BytesIO): Promise<ReqDHParams> {
    const nonce = await Primitive.Int128.read(b)
    const serverNonce = await Primitive.Int128.read(b)
    const p = await Primitive.Bytes.read(b)
    const q = await Primitive.Bytes.read(b)
    const publicKeyFingerprint = await Primitive.Long.read(b)
    const encryptedData = await Primitive.Bytes.read(b)
    return new ReqDHParams({ nonce, serverNonce, p, q, publicKeyFingerprint, encryptedData })
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
    if (this.p !== undefined) {
      b.write(Primitive.Bytes.write(this.p))
    }
    if (this.q !== undefined) {
      b.write(Primitive.Bytes.write(this.q))
    }
    if (this.publicKeyFingerprint !== undefined) {
      b.write(Primitive.Long.write(this.publicKeyFingerprint))
    }
    if (this.encryptedData !== undefined) {
      b.write(Primitive.Bytes.write(this.encryptedData))
    }
    return b.buffer
  }
}
