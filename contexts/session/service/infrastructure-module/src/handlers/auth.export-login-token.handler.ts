import TL             from '@chats-system/tl'

import { RpcHandler } from '../rpc/index.js'

@RpcHandler(TL.auth.ExportLoginToken)
export class AuthExportLoginTokenHandler {
  async execute(): Promise<TL.auth.LoginToken> {
    return new TL.auth.LoginToken({
      expires: Math.floor(Date.now() / 1000) + 3500,
      token: Buffer.from('YWRzZmFzZGZhc2RmYXNkZmFkZmFk', 'base64'),
    })
  }
}
