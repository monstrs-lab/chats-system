import * as Primitive from '@monstrs/mtproto-tl-primitives'
import { TLObject }   from '@monstrs/mtproto-tl-core'

export interface SetClientDHParamsParams {
  nonce: bigint
  serverNonce: bigint
  encryptedData: Buffer
}

export class SetClientDHParams extends TLObject {
  override constructorId: number = 0xf5045f1f

  nonce!: bigint

  serverNonce!: bigint

  encryptedData!: Buffer

  constructor(params: SetClientDHParamsParams) {
    super(params)
    this.nonce = params.nonce
    this.serverNonce = params.serverNonce
    this.encryptedData = params.encryptedData
  }

  static override async read(b: Primitive.BytesIO): Promise<SetClientDHParams> {
    const nonce = await Primitive.Int128.read(b)
    const serverNonce = await Primitive.Int128.read(b)
    const encryptedData = await Primitive.Bytes.read(b)
    return new SetClientDHParams({ nonce, serverNonce, encryptedData })
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
    if (this.encryptedData !== undefined) {
      b.write(Primitive.Bytes.write(this.encryptedData))
    }
    return b.buffer
  }
}
