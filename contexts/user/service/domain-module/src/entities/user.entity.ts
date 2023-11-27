export class User {
  constructor(
    public readonly id: bigint,
    public readonly accessHash: bigint,
    public readonly secretKeyId: bigint,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly phone: string,
    public readonly username?: string
  ) {}
}
