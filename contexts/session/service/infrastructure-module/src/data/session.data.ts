export class SessionData {
  constructor(
    public readonly gatewayId: string,
    public readonly clientIp: string,
    public readonly sessionId: bigint,
    public readonly salt: bigint,
    public readonly buf: Uint8Array
  ) {}
}
