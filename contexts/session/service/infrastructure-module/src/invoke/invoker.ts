import type { TLObject }    from '@chats-system/tl'

import type { SessionData } from '../data/index.js'

import { Injectable }       from '@nestjs/common'

import { Primitive }        from '@chats-system/tl'
import { client as auth }   from '@chats-system/auth-rpc-client'
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
        langCode: result.v || message.langCode,
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
      return new TL.Config({
        date: Date.now() / 1000,
        expires: Date.now() / 1000 + 100000000,
        testMode: false,
        thisDc: 1,
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
        autologinToken: 'token',
        // reactionsDefault: []
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
