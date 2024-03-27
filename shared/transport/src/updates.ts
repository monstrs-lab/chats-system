import type { Update }     from './update.js'

import * as Primitive      from '@monstrs/mtproto-tl-primitives'
import { TLObject }        from '@monstrs/mtproto-tl-core'

import { UpdateMessageID } from './update-message-id.js'

export interface UpdatesParams {
  updates: Array<Update>
}

export class Updates extends TLObject {
  override constructorId: number = 0x74ae4240

  updates!: Array<Update>

  constructor(params: UpdatesParams) {
    super(params)
    this.updates = params.updates
  }

  static override async read(b: Primitive.BytesIO): Promise<Updates> {
    await Primitive.Int.read(b)
    const updates = await Primitive.Vector.read(b, UpdateMessageID)
    return new Updates({ updates })
  }

  write(): Buffer {
    const b: Primitive.BytesIO = new Primitive.BytesIO()
    b.write(Primitive.Int.write(this.constructorId, false))
    if (this.updates) {
      b.write(
        Primitive.Vector.write(this.updates, {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return
          write: (params) => params.write(),
        })
      )
    }
    return b.buffer
  }
}
