import type { TypeInputPeer } from './input-peer.type.js'

import * as Primitive         from '@monstrs/mtproto-tl-primitives'
import { TLObject }           from '@monstrs/mtproto-tl-core'

import { registry }           from './registry.js'

export interface SendMessageParams {
  peer: TypeInputPeer
  message: string
  randomId: bigint
}

export class SendMessage extends TLObject {
  override constructorId: number = 0x280d096f

  override type: string = 'Updates'

  peer!: TypeInputPeer

  message!: string

  randomId!: bigint

  constructor(params: SendMessageParams) {
    super(params)
    this.peer = params.peer
    this.message = params.message
    this.randomId = params.randomId
  }

  static override async read(b: Primitive.BytesIO): Promise<SendMessage> {
    const peer = await registry.read<TypeInputPeer>(b)
    const message = await Primitive.String.read(b)
    const randomId = await Primitive.Long.read(b)
    return new SendMessage({ peer, message, randomId })
  }

  write(): Buffer {
    const b: Primitive.BytesIO = new Primitive.BytesIO()
    b.write(Primitive.Int.write(this.constructorId, false))
    if (this.peer !== undefined) {
      b.write(this.peer.write())
    }
    if (this.message !== undefined) {
      b.write(Primitive.String.write(this.message))
    }
    if (this.randomId !== undefined) {
      b.write(Primitive.Long.write(this.randomId))
    }
    return b.buffer
  }
}
