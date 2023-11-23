import type { ServiceImpl }         from '@connectrpc/connect'

import { ConnectRpcMethod }         from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService }        from '@monstrs/nestjs-connectrpc'
import { Controller }               from '@nestjs/common'

import { Config }                   from '@chats-system/help-rpc'
import { GetCountriesListRequest }  from '@chats-system/help-rpc'
import { GetCountriesListResponse } from '@chats-system/help-rpc'
import { Country }                  from '@chats-system/help-rpc'
import { CountryCode }              from '@chats-system/help-rpc'
import { GetConfigResponse }        from '@chats-system/help-rpc'
import { GetNearestDcResponse }     from '@chats-system/help-rpc'
import { NearestDc }                from '@chats-system/help-rpc'
import { HelpService }              from '@chats-system/help-rpc'

@Controller()
@ConnectRpcService(HelpService)
export class HelpServiceController implements ServiceImpl<typeof HelpService> {
  @ConnectRpcMethod()
  async getConfig(): Promise<GetConfigResponse> {
    return new GetConfigResponse({
      config: new Config({
        date: Math.floor(Date.now() / 1000),
        expires: Math.floor(Date.now() / 1000) + 3600,
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
      }),
    })
  }

  @ConnectRpcMethod()
  getNearestDc(): GetNearestDcResponse {
    return new GetNearestDcResponse({
      nearestDc: new NearestDc({
        country: 'RU',
        thisDc: 1,
        nearestDc: 1,
      }),
    })
  }

  @ConnectRpcMethod()
  async getCountriesList(request: GetCountriesListRequest): Promise<GetCountriesListResponse> {
    return new GetCountriesListResponse({
      countries: [
        new Country({
          iso2: 'RU',
          defaultName: 'Россия',
          countryCodes: [
            new CountryCode({
              countryCode: '7',
            }),
          ],
        }),
      ],
      hash: request.hash,
    })
  }
}
