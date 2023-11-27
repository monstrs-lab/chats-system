export class ConnectionData {
  constructor(
    public readonly authKeyId: bigint,
    public readonly sessionId: bigint,
    public readonly gatewayId: string,
    public readonly isNew: boolean = false
  ) {}
}
