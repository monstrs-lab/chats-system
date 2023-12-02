import TL             from '@chats-system/tl'

import { RpcHandler } from '../rpc/index.js'

@RpcHandler(TL.help.GetNearestDc)
export class HelpGetNearestDcHandler {
  async execute(): Promise<TL.NearestDc> {
    return new TL.NearestDc({
      country: 'RU',
      thisDc: 1,
      nearestDc: 1,
    })
  }
}
