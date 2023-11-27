import { client }     from '@chats-system/help-rpc-client'
import TL             from '@chats-system/tl'

import { RpcHandler } from '../rpc/index.js'

@RpcHandler(TL.help.GetConfig)
export class HelpGetConfigHandler {
  async execute(): Promise<TL.Config> {
    const response = await client.getConfig({})

    return new TL.Config({
      ...response.config!,
      dcOptions:
        response.config?.dcOptions.map(
          (dcOption): TL.DcOption =>
            new TL.DcOption({
              ...dcOption,
              secret: Buffer.from(dcOption.secret || []),
            })
        ) || [],
      reactionsDefault: undefined,
    })
  }
}