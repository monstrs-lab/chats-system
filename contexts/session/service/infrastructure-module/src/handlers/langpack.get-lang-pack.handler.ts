import type { SessionMetadata } from '../rpc/index.js'

import { client }               from '@chats-system/authkey-rpc-client'
import TL                       from '@chats-system/tl'

import { RpcHandler }           from '../rpc/index.js'

@RpcHandler(TL.langpack.GetLangPack)
export class LangPackGetLangPackHandler {
  async execute(
    request: TL.langpack.GetLangPack,
    session: SessionMetadata
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
