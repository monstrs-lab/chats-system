import { TLRpcHandler } from '@chats-system/tl-rpc'
import TL               from '@chats-system/tl'

@TLRpcHandler(TL.help.GetNearestDc)
export class HelpGetNearestDcHandler {
  async execute(): Promise<TL.NearestDc> {
    return new TL.NearestDc({
      country: 'RU',
      thisDc: 1,
      nearestDc: 1,
    })
  }
}
