import { Injectable }         from '@nestjs/common'

import { CreateUserUseCase }  from './create-user.use-case.js'
import { GetUserByIdUseCase } from './get-user-by-id.use-case.js'

@Injectable()
export class UserUseCases {
  constructor(
    public readonly createUser: CreateUserUseCase,
    public readonly getUserById: GetUserByIdUseCase
  ) {}
}
