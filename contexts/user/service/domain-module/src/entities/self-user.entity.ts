import { User } from './user.entity.js'

export class SelfUser extends User {
  public override readonly self: boolean = true

  public override readonly contact: boolean = true

  public override readonly mutualContact: boolean = true
}
