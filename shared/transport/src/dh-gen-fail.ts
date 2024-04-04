import * as Primitive from '@monstrs/mtproto-tl-primitives'
import { TLObject }   from '@monstrs/mtproto-tl-core'

export interface DhGenFailParams {
  nonce: bigint
  serverNonce: bigint
  newNonceHash3: bigint
}

export class DhGenFail extends TLObject {
  override constructorId: number = 0xa69dae02

  override type: string = 'SetClientDHParamsAnswer'

  nonce!: bigint

  serverNonce!: bigint

  newNonceHash3!: bigint

  constructor(params: DhGenFailParams) {
    super(params)
    this.nonce = params.nonce
    this.serverNonce = params.serverNonce
    this.newNonceHash3 = params.newNonceHash3
  }

  static override async read(b: Primitive.BytesIO): Promise<DhGenFail> {
    const nonce = await Primitive.Int128.read(b)
    const serverNonce = await Primitive.Int128.read(b)
    const newNonceHash3 = await Primitive.Int128.read(b)
    return new DhGenFail({ nonce, serverNonce, newNonceHash3 })
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
    if (this.newNonceHash3 !== undefined) {
      b.write(Primitive.Int128.write(this.newNonceHash3))
    }
    return b.buffer
  }
}
