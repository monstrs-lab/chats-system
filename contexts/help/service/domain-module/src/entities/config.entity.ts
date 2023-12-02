export class Config {
  public readonly date: number

  public readonly expires: number

  constructor(
    public readonly testMode: boolean = false,
    public readonly thisDc: number = 1,
    public readonly defaultP2pContacts: boolean = true,
    public readonly preloadFeaturedStickers: boolean = false,
    public readonly revokePmInbox: boolean = true,
    public readonly blockedMode: boolean = false,
    public readonly dcTxtDomainName: string = 'apv2.stel.com',
    public readonly chatSizeMax: number = 200,
    public readonly megagroupSizeMax: number = 100000,
    public readonly forwardedCountMax: number = 100,
    public readonly onlineUpdatePeriodMs: number = 210000,
    public readonly offlineBlurTimeoutMs: number = 5000,
    public readonly offlineIdleTimeoutMs: number = 30000,
    public readonly onlineCloudTimeoutMs: number = 300000,
    public readonly notifyCloudDelayMs: number = 30000,
    public readonly notifyDefaultDelayMs: number = 1500,
    public readonly pushChatPeriodMs: number = 60000,
    public readonly pushChatLimit: number = 2,
    public readonly editTimeLimit: number = 172800,
    public readonly revokeTimeLimit: number = 2147483647,
    public readonly revokePmTimeLimit: number = 2147483647,
    public readonly ratingEDecay: number = 2419200,
    public readonly stickersRecentLimit: number = 200,
    public readonly channelsReadMediaPeriod: number = 604800,
    public readonly callReceiveTimeoutMs: number = 20000,
    public readonly callRingTimeoutMs: number = 90000,
    public readonly callConnectTimeoutMs: number = 30000,
    public readonly callPacketTimeoutMs: number = 10000,
    public readonly gifSearchUsername: string = 'gif',
    public readonly venueSearchUsername: string = 'foursquare',
    public readonly imgSearchUsername: string = 'bing',
    public readonly staticMapsProvider: string = 'telegram',
    public readonly captionLengthMax: number = 200,
    public readonly messageLengthMax: number = 4096,
    public readonly webfileDcId: number = 4,
    public readonly suggestedLangCode: string = 'ru-ru',
    public readonly langPackVersion: number = 262834,
    public readonly baseLangPackVersion: number = 0,
    public readonly forceTryIpv6: boolean = false,
    public readonly tmpSessions: number = 5,
    public readonly meUrlPrefix: string = 'https://telegram.org/'
  ) {
    this.date = Math.floor(Date.now() / 1000)
    this.expires = Math.floor(Date.now() / 1000) + 3600
  }
}
