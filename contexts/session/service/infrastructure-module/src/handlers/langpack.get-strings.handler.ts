import TL             from '@chats-system/tl'

import { RpcHandler } from '../rpc/index.js'

@RpcHandler(TL.langpack.GetStrings)
export class LangPackGetStringsHandler {
  async execute(): Promise<Array<TL.LangPackString>> {
    return {
      write() {
        const id = Buffer.alloc(4)
        id.writeInt32LE(481674261)

        const length = Buffer.alloc(4)
        length.writeInt32LE(0)

        return Buffer.concat([id, length])
      },
    } as any as Array<TL.LangPackString>
  }
}
