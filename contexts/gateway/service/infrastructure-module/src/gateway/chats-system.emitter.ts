import type { TLObject } from '@monstrs/mtproto-tl-core'
import type { Server }   from 'socket.io'

import { Injectable }    from '@nestjs/common'

@Injectable()
export class ChatsSystemEmitter {
  #server!: Server

  register(server: Server): void {
    this.#server = server
  }

  emitToUser(userId: bigint, data: TLObject): void {
    this.#server.of(userId.toString()).adapter.emit('update', data.write())
  }
}
