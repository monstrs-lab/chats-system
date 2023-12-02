import { TLRpcHandler } from '@chats-system/tl-rpc'
import TL               from '@chats-system/tl'

@TLRpcHandler(TL.langpack.GetStrings)
export class LangPackGetStringsHandler {
  async execute(): Promise<Array<TL.LangPackString>> {
    return []
  }
}
