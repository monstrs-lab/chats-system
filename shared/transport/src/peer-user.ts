import * as Primitive from '@monstrs/mtproto-tl-primitives'
import { TLObject }   from '@monstrs/mtproto-tl-core'

export interface PeerUserParams {
  userId: bigint
}

export class PeerUser extends TLObject {
  override constructorId: number = 0x59511722

  override type: string = 'Peer'

  userId!: bigint

  constructor(params: PeerUserParams) {
    super(params)
    this.userId = params.userId
  }

  static override async read(b: Primitive.BytesIO): Promise<PeerUser> {
    const userId = await Primitive.Long.read(b)
    return new PeerUser({ userId })
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
