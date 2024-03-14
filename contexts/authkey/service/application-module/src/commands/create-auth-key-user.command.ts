export class CreateAuthKeyUserCommand {
  constructor(
    public readonly authKeyUserId: bigint,
    public readonly authKeyId: bigint,
    public readonly userId: bigint
  ) {}
}
