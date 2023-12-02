import type { TLRpcSession } from '@chats-system/tl-rpc'

import { TLRpcHandler }      from '@chats-system/tl-rpc'
import { client }            from '@chats-system/authkey-rpc-client'
import TL                    from '@chats-system/tl'

@TLRpcHandler(TL.langpack.GetLangPack)
export class LangPackGetLangPackHandler {
  async execute(
    request: TL.langpack.GetLangPack,
    session: TLRpcSession
  ): Promise<TL.LangPackDifference> {
    const response = await client.getAuthKeyConnection({
      authKeyId: session.authKeyId,
    })

    return new TL.LangPackDifference({
      langCode: response.authKeyConnection?.langPack || request.langCode,
      fromVersion: 0,
      version: 0,
      strings: [],
    })
  }
}
