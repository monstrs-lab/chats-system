import { Injectable }        from '@nestjs/common'

import { CreateUserUseCase } from './create-user.use-case.js'
import { GetUserUseCase }    from './get-user.use-case.js'

@Injectable()
export class UserUseCases {
  constructor(
    public readonly createUser: CreateUserUseCase,
    public readonly getUser: GetUserUseCase
  ) {}
}
