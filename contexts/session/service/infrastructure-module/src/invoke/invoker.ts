import type { TLObject }         from '@monstrs/mtproto-tl-core'

import type { SessionData }      from '../data/index.js'

import { Injectable }            from '@nestjs/common'

import { LangpackGetLangPack }   from '@chats-system/operations'
import { LangPackDifference }    from '@chats-system/operations'
import { LangpackGetStrings }    from '@chats-system/operations'
import { AccountRegisterDevice } from '@chats-system/operations'
import { BoolTrue }              from '@chats-system/operations'
import { HelpGetConfig }         from '@chats-system/operations'
import { Config }                from '@chats-system/operations'
import { client as auth }        from '@chats-system/auth-rpc-client'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InvokeMessage {}

@Injectable()
export class Invoker {
  async invoke(sessionData: SessionData, message: InvokeMessage): Promise<TLObject<any>> {
    if (message instanceof LangpackGetLangPack) {
      const result = await auth.getLangPack({
        authKeyId: sessionData.authKeyId,
      })

      return new LangPackDifference({
        langCode: (result as any) || message.langCode,
        fromVersion: 0,
        version: 0,
        strings: [],
      })
    }

    if (message instanceof LangpackGetStrings) {
      return {
        getBytes() {
          const id = Buffer.alloc(4)
          id.writeInt32LE(481674261)

          const length = Buffer.alloc(4)
          length.writeInt32LE(0)

          return Buffer.concat([id, length])
        },
      } as TLObject<any>
    }

    if (message instanceof AccountRegisterDevice) {
      return new BoolTrue({})
    }

    if (message instanceof HelpGetConfig) {
      // @ts-expect-error
      return new Config({})
    }

    throw new Error('Invoke unknown type')
  }
}
