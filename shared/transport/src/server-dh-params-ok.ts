import * as Primitive from '@monstrs/mtproto-tl-primitives'
import { TLObject }   from '@monstrs/mtproto-tl-core'

export interface ServerDHParamsOkParams {
  nonce: bigint
  serverNonce: bigint
  encryptedAnswer: Buffer
}

export class ServerDHParamsOk extends TLObject {
  override constructorId: number = 0xd0e8075c

  override type: string = 'ServerDHParams'

  nonce!: bigint

  serverNonce!: bigint

  encryptedAnswer!: Buffer

  constructor(params: ServerDHParamsOkParams) {
    super(params)
    this.nonce = params.nonce
    this.serverNonce = params.serverNonce
    this.encryptedAnswer = params.encryptedAnswer
  }

  static override async read(b: Primitive.BytesIO): Promise<ServerDHParamsOk> {
    const nonce = await Primitive.Int128.read(b)
    const serverNonce = await Primitive.Int128.read(b)
    const encryptedAnswer = await Primitive.Bytes.read(b)
    return new ServerDHParamsOk({ nonce, serverNonce, encryptedAnswer })
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
    if (this.encryptedAnswer !== undefined) {
      b.write(Primitive.Bytes.write(this.encryptedAnswer))
    }
    return b.buffer
  }
}
