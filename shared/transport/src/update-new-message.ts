import type { TypeMessage } from './message.type.js'

import * as Primitive       from '@monstrs/mtproto-tl-primitives'
import { TLObject }         from '@monstrs/mtproto-tl-core'

import { registry }         from './registry.js'

export interface UpdateNewMessageParams {
  message: TypeMessage
}

export class UpdateNewMessage extends TLObject {
  override constructorId: number = 0x1f2b0afd

  override type: string = 'Update'

  message!: TypeMessage

  constructor(params: UpdateNewMessageParams) {
    super(params)
    this.message = params.message
  }

  static override async read(b: Primitive.BytesIO): Promise<UpdateNewMessage> {
    const message = await registry.read<TypeMessage>(b)
    return new UpdateNewMessage({ message })
  }

  write(): Buffer {
    const b: Primitive.BytesIO = new Primitive.BytesIO()
    b.write(Primitive.Int.write(this.constructorId, false))
    if (this.message !== undefined) {
      b.write(this.message.write())
    }
    return b.buffer
  }
}
