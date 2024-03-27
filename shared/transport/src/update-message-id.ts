import * as Primitive from '@monstrs/mtproto-tl-primitives'
import { TLObject }   from '@monstrs/mtproto-tl-core'

export interface UpdateMessageIDParams {
  id: bigint
  randomId: bigint
}

export class UpdateMessageID extends TLObject {
  override constructorId: number = 0x4e90bfd6

  id!: bigint

  randomId!: bigint

  constructor(params: UpdateMessageIDParams) {
    super(params)
    this.id = params.id
    this.randomId = params.randomId
  }

  static override async read(b: Primitive.BytesIO): Promise<UpdateMessageID> {
    await Primitive.Int.read(b)
    const id = await Primitive.Long.read(b)
    const randomId = await Primitive.Long.read(b)
    return new UpdateMessageID({ id, randomId })
  }

  write(): Buffer {
    const b: Primitive.BytesIO = new Primitive.BytesIO()
    b.write(Primitive.Int.write(this.constructorId, false))
    if (this.id !== undefined) {
      b.write(Primitive.Long.write(this.id))
    }
    if (this.randomId !== undefined) {
      b.write(Primitive.Long.write(this.randomId))
    }
    return b.buffer
  }
}
