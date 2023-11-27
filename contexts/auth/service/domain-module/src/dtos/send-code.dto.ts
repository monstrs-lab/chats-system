export class SendCodeDto {
  constructor(
    public readonly authKeyId: bigint,
    public readonly sessionId: bigint,
    public readonly phone: string,
    public readonly phoneRegistered: boolean
  ) {}
}
