export class AuthKeyCreatedEvent {
  constructor(
    public readonly authKeyId: bigint,
    public readonly key: Buffer,
    public readonly createdAt: Date
  ) {}
}
