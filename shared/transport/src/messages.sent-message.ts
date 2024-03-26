import * as Primitive from '@monstrs/mtproto-tl-primitives'
import { TLObject }   from '@monstrs/mtproto-tl-core'

export class SentMessage extends TLObject {
  override constructorId: number = 0x9664f57f

  static override async read(): Promise<SentMessage> {
    return new SentMessage({})
  }

  write(): Buffer {
    const b: Primitive.BytesIO = new Primitive.BytesIO()
    b.write(Primitive.Int.write(this.constructorId, false))
    return b.buffer
  }
}
