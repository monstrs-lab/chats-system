import * as Primitive from '@monstrs/mtproto-tl-primitives'
import { TLObject }   from '@monstrs/mtproto-tl-core'

export interface InputPeerUserParams {
  userId: bigint
}

export class InputPeerUser extends TLObject {
  override constructorId: number = 0xdde8a54c

  userId!: bigint

  constructor(params: InputPeerUserParams) {
    super(params)
    this.userId = params.userId
  }

  static override async read(b: Primitive.BytesIO): Promise<InputPeerUser> {
    const userId = await Primitive.Long.read(b)
    return new InputPeerUser({ userId })
  }

  write(): Buffer {
    const b: Primitive.BytesIO = new Primitive.BytesIO()
    b.write(Primitive.Int.write(this.constructorId, false))
    if (this.userId !== undefined) {
      b.write(Primitive.Long.write(this.userId))
    }
    return b.buffer
  }
}
