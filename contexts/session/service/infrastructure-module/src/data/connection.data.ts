export class ConnectionData {
  constructor(
    public readonly isNew: boolean,
    public readonly gatewayId: string,
    public readonly sessionId: bigint
  ) {}

  DebugString(): string {
    return `{isNew: ${this.isNew}, gatewayId: ${this.gatewayId}, sessionId: ${this.sessionId}}`
  }
}
