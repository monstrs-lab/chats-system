export class AuthKeyUserCreatedEvent {
  constructor(
    public readonly authKeyUserId: bigint,
    public readonly authKeyId: bigint,
    public readonly userId: bigint,
    public readonly createdAt: Date
  ) {}
}
