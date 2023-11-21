import { TLObject }                                                                                                                   from '@monstrs/mtproto-tl-core'
import { serializeBytes }                                                                                                   from '@monstrs/mtproto-tl-core'
import { Injectable }                                                                                                                 from '@nestjs/common'

import { LangpackGetLangPack }                                                                                                         from '@chats-system/operations'
import { LangPackDifference }                                                                                     from '@chats-system/operations'
import { LangpackGetStrings }                                                                 from '@chats-system/operations'
import { Vector, ReactionCount, ReactionCountValues }                                                         from '@chats-system/operations'
import { AccountRegisterDevice }                                  from '@chats-system/operations'
import { BoolTrue }                        from '@chats-system/operations'
import { HelpGetConfig }         from '@chats-system/operations'
import { Config } from '@chats-system/operations'
import { client as auth }                                                                                                             from '@chats-system/auth-rpc-client'

import { SessionData }                                                                                                                from '../data/index.js'

export interface InvokeMessage {}

@Injectable()
export class Invoker {
  async invoke(
    sessionData: SessionData,
    message: InvokeMessage
  ): Promise<TLObject<any> | undefined> {
    if (message instanceof LangpackGetLangPack) {
      const result = await auth.getLangPack({
        authKeyId: sessionData.authKeyId,
      })

      return new LangPackDifference({
        langCode: message.langCode,
        fromVersion: 0,
        version: 0,
        strings: [],
      })
    } else if (message instanceof LangpackGetStrings) {
      return {
        getBytes() {
          const id = Buffer.alloc(4)
          id.writeInt32LE(481674261)

          const length = Buffer.alloc(4)
          length.writeInt32LE(0)

          return Buffer.concat([id, length])
        },
      } as any
    } else if (message instanceof AccountRegisterDevice) {
      return new BoolTrue({})
    } else if (message instanceof HelpGetConfig) {
      // @ts-expect-error
      return new Config({
        dcOptions: [],
        defaultP2pContacts: true,
        preloadFeaturedStickers: false,
        revokePmInbox: true,
        blockedMode: false,
        dcTxtDomainName: 'apv2.stel.com',
        chatSizeMax: 200,
        megagroupSizeMax: 100000,
        forwardedCountMax: 100,
        onlineUpdatePeriodMs: 210000,
        offlineBlurTimeoutMs: 5000,
        offlineIdleTimeoutMs: 30000,
        onlineCloudTimeoutMs: 300000,
        notifyCloudDelayMs: 30000,
        notifyDefaultDelayMs: 1500,
        pushChatPeriodMs: 60000,
        pushChatLimit: 2,
        editTimeLimit: 172800,
        revokeTimeLimit: 2147483647,
        revokePmTimeLimit: 2147483647,
        ratingEDecay: 2419200,
        stickersRecentLimit: 200,
        channelsReadMediaPeriod: 604800,
        callReceiveTimeoutMs: 20000,
        callRingTimeoutMs: 90000,
        callConnectTimeoutMs: 30000,
        callPacketTimeoutMs: 10000,
        meUrlPrefix: 'https://teamgram.io/',
        gifSearchUsername: 'gif',
        venueSearchUsername: 'foursquare',
        imgSearchUsername: 'bing',
        staticMapsProvider: 'telegram',
        captionLengthMax: 200,
        messageLengthMax: 4096,
        webfileDcId: 4,
        suggestedLangCode: 'classic-zh-cn',
        langPackVersion: 262834,
        baseLangPackVersion: 0,
        forceTryIpv6: false,
        tmpSessions: 5,
        autoupdateUrlPrefix: 'false',
        
        reactionsDefault: new ReactionCount({ count: 0, chosenOrder: 0, flags: undefined,
          reaction: {
            getBytes() {
              const id = Buffer.alloc(4)
              id.writeInt32LE(481674261)
    
              const length = Buffer.alloc(4)
              length.writeInt32LE(0)
    
              return Buffer.concat([id, length])
            }
          }
        }),
        autologinToken: 'true',
        //flags: [],
      })
    }

    return undefined
  }
}
