export class UserCreatedEvent {
  constructor(
    public readonly userId: bigint,
    public readonly externalId: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly createdAt: Date
  ) {}
}
