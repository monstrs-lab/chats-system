import * as Primitive from '@monstrs/mtproto-tl-primitives'
import { TLObject }   from '@monstrs/mtproto-tl-core'

export interface PongParams {
  msgId: bigint
  pingId: bigint
}

export class Pong extends TLObject {
  override constructorId: number = 0x347773c5

  msgId!: bigint

  pingId!: bigint

  constructor(params: PongParams) {
    super(params)
    this.msgId = params.msgId
    this.pingId = params.pingId
  }

  static override async read(b: Primitive.BytesIO): Promise<Pong> {
    const msgId = await Primitive.Long.read(b)
    const pingId = await Primitive.Long.read(b)
    return new Pong({ msgId, pingId })
  }

  write(): Buffer {
    const b: Primitive.BytesIO = new Primitive.BytesIO()
    b.write(Primitive.Int.write(this.constructorId, false))
    if (this.msgId !== undefined) {
      b.write(Primitive.Long.write(this.msgId))
    }
    if (this.pingId !== undefined) {
      b.write(Primitive.Long.write(this.pingId))
    }
    return b.buffer
  }
}
