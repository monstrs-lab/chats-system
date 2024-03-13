import * as Primitive from '@monstrs/mtproto-tl-primitives'
import { TLObject }   from '@monstrs/mtproto-tl-core'

export interface PingParams {
  pingId: bigint
}

export class Ping extends TLObject {
  override constructorId: number = 0x7abe77ec

  pingId!: bigint

  constructor(params: PingParams) {
    super(params)
    this.pingId = params.pingId
  }

  static override async read(b: Primitive.BytesIO): Promise<Ping> {
    const pingId = await Primitive.Long.read(b)
    return new Ping({ pingId })
  }

  write(): Buffer {
    const b: Primitive.BytesIO = new Primitive.BytesIO()
    b.write(Primitive.Int.write(this.constructorId, false))
    if (this.pingId !== undefined) {
      b.write(Primitive.Long.write(this.pingId))
    }
    return b.buffer
  }
}
