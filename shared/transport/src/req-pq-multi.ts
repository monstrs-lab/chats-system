import * as Primitive from '@monstrs/mtproto-tl-primitives'
import { TLObject }   from '@monstrs/mtproto-tl-core'

export interface ReqPqMultiParams {
  nonce: bigint
}

export class ReqPqMulti extends TLObject {
  override constructorId: number = 0xbe7e8ef1

  nonce!: bigint

  constructor(params: ReqPqMultiParams) {
    super(params)
    this.nonce = params.nonce
  }

  static override async read(b: Primitive.BytesIO): Promise<ReqPqMulti> {
    const nonce = await Primitive.Int128.read(b)
    return new ReqPqMulti({ nonce })
  }

  write(): Buffer {
    const b: Primitive.BytesIO = new Primitive.BytesIO()
    b.write(Primitive.Int.write(this.constructorId, false))
    if (this.nonce !== undefined) {
      b.write(Primitive.Int128.write(this.nonce))
    }
    return b.buffer
  }
}
