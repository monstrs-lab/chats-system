export class CreateAuthKeyUserDto {
  constructor(
    public readonly authKeyId: bigint,
    public readonly userId: bigint
  ) {}
}
