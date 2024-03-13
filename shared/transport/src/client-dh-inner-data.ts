import * as Primitive from '@monstrs/mtproto-tl-primitives'
import { TLObject }   from '@monstrs/mtproto-tl-core'

export interface ClientDHInnerDataParams {
  nonce: bigint
  serverNonce: bigint
  retryId: bigint
  gB: Buffer
}

export class ClientDHInnerData extends TLObject {
  override constructorId: number = 0x6643b654

  nonce!: bigint

  serverNonce!: bigint

  retryId!: bigint

  gB!: Buffer

  constructor(params: ClientDHInnerDataParams) {
    super(params)
    this.nonce = params.nonce
    this.serverNonce = params.serverNonce
    this.retryId = params.retryId
    this.gB = params.gB
  }

  static override async read(b: Primitive.BytesIO): Promise<ClientDHInnerData> {
    const nonce = await Primitive.Int128.read(b)
    const serverNonce = await Primitive.Int128.read(b)
    const retryId = await Primitive.Long.read(b)
    const gB = await Primitive.Bytes.read(b)
    return new ClientDHInnerData({ nonce, serverNonce, retryId, gB })
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
    if (this.retryId !== undefined) {
      b.write(Primitive.Long.write(this.retryId))
    }
    if (this.gB !== undefined) {
      b.write(Primitive.Bytes.write(this.gB))
    }
    return b.buffer
  }
}
