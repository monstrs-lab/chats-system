export class AuthKeyUser {
  constructor(
    public readonly id: bigint,
    public readonly authKeyId: bigint,
    public readonly userId: bigint,
    public readonly hash: bigint,
    public readonly deleted: boolean,
    public readonly dateCreated: Date,
    public readonly dateActive: Date
  ) {}
}
