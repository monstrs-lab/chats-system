import type { State }   from '@chats-system/updates-domain-module'

import { Injectable }   from '@nestjs/common'

import { StateFactory } from '@chats-system/updates-domain-module'

import { IdGenPort }    from '../ports/index.js'

@Injectable()
export class GetStateUseCase {
  constructor(
    private readonly stateFactory: StateFactory,
    private readonly idGenPort: IdGenPort
  ) {}

  async execute(authKeyId: bigint, userId: bigint): Promise<State> {
    let pts = await this.idGenPort.getCurrentPtsId(userId)

    if (pts === 0) {
      pts = await this.idGenPort.getNextPtsId(userId)
    }

    const seq = await this.idGenPort.getCurrentSequenceId(authKeyId)

    return this.stateFactory.createState({
      qts: 0,
      pts,
      seq,
    })
  }
}
