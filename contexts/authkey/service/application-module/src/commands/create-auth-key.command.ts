export class CreateAuthKeyCommand {
  constructor(
    public readonly authKeyId: bigint,
    public readonly key: Buffer
  ) {}
}
