export class SessionData {
  constructor(
    public readonly authKeyId: bigint,
    public readonly sessionId: bigint,
    public readonly gatewayId: string,
    public readonly clientIp: string,
    public readonly salt: bigint,
    public readonly payload: Uint8Array
  ) {}
}
