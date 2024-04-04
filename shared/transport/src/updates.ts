import type { TypeUpdate } from './update.type.js'

import * as Primitive      from '@monstrs/mtproto-tl-primitives'
import { TLObject }        from '@monstrs/mtproto-tl-core'

import { registry }        from './registry.js'

export interface UpdatesParams {
  updates: Array<TypeUpdate>
}

export class Updates extends TLObject {
  override constructorId: number = 0x74ae4240

  override type: string = 'Updates'

  updates!: Array<TypeUpdate>

  constructor(params: UpdatesParams) {
    super(params)
    this.updates = params.updates
  }

  static override async read(b: Primitive.BytesIO): Promise<Updates> {
    await Primitive.Int.read(b)
    const updates = await Primitive.Vector.read(b, undefined, registry)
    return new Updates({ updates })
  }

  write(): Buffer {
    const b: Primitive.BytesIO = new Primitive.BytesIO()
    b.write(Primitive.Int.write(this.constructorId, false))
    if (this.updates) {
      b.write(Primitive.Vector.write(this.updates))
    }
    return b.buffer
  }
}
