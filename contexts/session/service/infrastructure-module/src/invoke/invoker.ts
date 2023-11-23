import type { TLObject }    from '@chats-system/tl'

import type { SessionData } from '../data/index.js'

import { Injectable }       from '@nestjs/common'

import { Primitive }        from '@chats-system/tl'
import { client as auth }   from '@chats-system/auth-session-rpc-client'
import { client as help }   from '@chats-system/help-rpc-client'
import TL                   from '@chats-system/tl'

@Injectable()
export class Invoker {
  async invoke(
    sessionData: SessionData,
    message: InstanceType<typeof TLObject>
  ): Promise<InstanceType<typeof TLObject>> {
    if (message instanceof TL.langpack.GetLangPack) {
      const result = await auth.getLangPack({
        authKeyId: sessionData.authKeyId,
      })

      return new TL.LangPackDifference({
        langCode: result.langPack || message.langCode,
        fromVersion: 0,
        version: 0,
        strings: [],
      })
    }

    if (message instanceof TL.langpack.GetStrings) {
      return {
        write() {
          const id = Buffer.alloc(4)
          id.writeInt32LE(481674261)

          const length = Buffer.alloc(4)
          length.writeInt32LE(0)

          return Buffer.concat([id, length])
        },
      } as InstanceType<typeof TLObject>
    }

    if (message instanceof TL.account.RegisterDevice) {
      return new Primitive.BoolTrue()
    }

    if (message instanceof TL.help.GetConfig) {
      const response = await help.getConfig({})

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

    if (message instanceof TL.updates.GetState) {
      return new TL.updates.State({
        pts: 0,
        qts: 0,
        date: Date.now() / 1000,
        seq: 23,
        unreadCount: 0,
      })
    }

    throw new Error(
      `Invoke unknown type: ${message.className} ${message.classType} ${message.constructorId}`
    )
  }
}
