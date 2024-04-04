import type { TypePeer } from './peer.type.js'

import * as Primitive    from '@monstrs/mtproto-tl-primitives'
import { TLObject }      from '@monstrs/mtproto-tl-core'

import { registry }      from './registry.js'

export interface MessageParams {
  out?: boolean
  id: bigint
  fromId?: TypePeer
  peerId: TypePeer
  message: string
}

export class Message extends TLObject {
  override constructorId: number = 0x76bec211

  override type: string = 'Message'

  out?: boolean

  id!: bigint

  fromId?: TypePeer

  peerId!: TypePeer

  message!: string

  constructor(params: MessageParams) {
    super(params)
    this.out = params.out
    this.id = params.id
    this.fromId = params.fromId
    this.peerId = params.peerId
    this.message = params.message
  }

  static override async read(b: Primitive.BytesIO): Promise<Message> {
    const flags = await Primitive.Int.read(b)
    const out = flags & (1 << 1) ? true : false // eslint-disable-line no-bitwise, no-unneeded-ternary
    const id = await Primitive.Long.read(b)
    const fromId = flags & (1 << 2) ? await registry.read<TypePeer>(b) : undefined // eslint-disable-line no-bitwise
    const peerId = await registry.read<TypePeer>(b)
    const message = await Primitive.String.read(b)
    return new Message({ out, id, fromId, peerId, message })
  }

  write(): Buffer {
    const b: Primitive.BytesIO = new Primitive.BytesIO()
    b.write(Primitive.Int.write(this.constructorId, false))
    let flags = 0
    flags |= this.out ? 1 << 1 : 0 // eslint-disable-line no-bitwise
    flags |= this.fromId !== undefined ? 1 << 2 : 0 // eslint-disable-line no-bitwise
    b.write(Primitive.Int.write(flags))
    if (this.id !== undefined) {
      b.write(Primitive.Long.write(this.id))
    }
    if (this.fromId !== undefined) {
      b.write(this.fromId.write())
    }
    if (this.peerId !== undefined) {
      b.write(this.peerId.write())
    }
    if (this.message !== undefined) {
      b.write(Primitive.String.write(this.message))
    }
    return b.buffer
  }
}
