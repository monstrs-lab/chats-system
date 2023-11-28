export class UserContact {
  constructor(
    public readonly id: bigint,
    public readonly ownerUserId: bigint,
    public readonly contactUserId: bigint,
    public readonly contactPhone: string,
    public readonly contactFirstName: string,
    public readonly contactLastName: string,
    public readonly mutual: boolean,
    public readonly isDeleted: boolean
  ) {}
}
