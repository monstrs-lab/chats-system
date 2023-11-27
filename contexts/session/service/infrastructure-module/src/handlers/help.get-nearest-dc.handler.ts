import { client }     from '@chats-system/help-rpc-client'
import TL             from '@chats-system/tl'

import { RpcHandler } from '../rpc/index.js'

@RpcHandler(TL.help.GetNearestDc)
export class HelpGetNearestDcHandler {
  async execute(): Promise<TL.NearestDc> {
    const response = await client.getNearestDc({})

    return new TL.NearestDc(response.nearestDc!)
  }
}
