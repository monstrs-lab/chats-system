export class UpdateAuthKeyConnectionDto {
  constructor(
    public readonly layer?: number,
    public readonly apiId?: number,
    public readonly deviceModel?: string,
    public readonly systemVersion?: string,
    public readonly appVersion?: string,
    public readonly systemLangCode?: string,
    public readonly langPack?: string,
    public readonly langCode?: string,
    public readonly clientIp?: string,
    public readonly params?: object
  ) {}
}
