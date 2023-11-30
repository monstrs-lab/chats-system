import TL             from '@chats-system/tl'

import { RpcHandler } from '../rpc/index.js'

@RpcHandler(TL.langpack.GetStrings)
export class LangPackGetStringsHandler {
  async execute(): Promise<Array<TL.LangPackString>> {
    return []
  }
}
