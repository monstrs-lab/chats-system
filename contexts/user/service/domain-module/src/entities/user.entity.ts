import { SelfUser } from './self-user.entity.js'

export class User {
  public readonly self: boolean = false

  public readonly contact: boolean = false

  public readonly mutualContact: boolean = false

  public readonly deleted: boolean = false

  constructor(
    public readonly id: bigint,
    public readonly accessHash: bigint,
    public readonly secretKeyId: bigint,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly phone: string,
    public readonly username?: string
  ) {}

  toSelfUser(): SelfUser {
    return new SelfUser(
      this.id,
      this.accessHash,
      this.secretKeyId,
      this.firstName,
      this.lastName,
      this.phone,
      this.username
    )
  }
}
