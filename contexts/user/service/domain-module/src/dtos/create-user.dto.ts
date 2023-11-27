export class CreateUserDto {
  constructor(
    public readonly secretKeyId: bigint,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly phone: string
  ) {}
}
