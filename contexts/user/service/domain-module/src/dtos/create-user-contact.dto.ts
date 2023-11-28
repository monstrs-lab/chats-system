export class CreateUserContactDto {
  constructor(
    public readonly ownerUserId: bigint,
    public readonly contactUserId: bigint,
    public readonly contactPhone: string,
    public readonly contactFirstName: string,
    public readonly contactLastName: string,
    public readonly mutual: boolean = false
  ) {}
}
