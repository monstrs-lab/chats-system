import * as Primitive from '@monstrs/mtproto-tl-primitives'
import { TLObject }   from '@monstrs/mtproto-tl-core'

export interface DhGenOkParams {
  nonce: bigint
  serverNonce: bigint
  newNonceHash1: bigint
}

export class DhGenOk extends TLObject {
  override constructorId: number = 0x3bcbf734

  override type: string = 'SetClientDHParamsAnswer'

  nonce!: bigint

  serverNonce!: bigint

  newNonceHash1!: bigint

  constructor(params: DhGenOkParams) {
    super(params)
    this.nonce = params.nonce
    this.serverNonce = params.serverNonce
    this.newNonceHash1 = params.newNonceHash1
  }

  static override async read(b: Primitive.BytesIO): Promise<DhGenOk> {
    const nonce = await Primitive.Int128.read(b)
    const serverNonce = await Primitive.Int128.read(b)
    const newNonceHash1 = await Primitive.Int128.read(b)
    return new DhGenOk({ nonce, serverNonce, newNonceHash1 })
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
    if (this.newNonceHash1 !== undefined) {
      b.write(Primitive.Int128.write(this.newNonceHash1))
    }
    return b.buffer
  }
}
