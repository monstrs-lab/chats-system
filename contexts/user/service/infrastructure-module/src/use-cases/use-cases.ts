import { Injectable }      from '@nestjs/common'

import { GetImmutableUserByPhoneUseCase } from './get-immutable-user-by-phone.use-case.js'
import { CreateUserUseCase } from './create-user.use-case.js'

@Injectable()
export class UseCases {
  constructor(public readonly getImmutableUserByPhone: GetImmutableUserByPhoneUseCase,
    public readonly createUser: CreateUserUseCase
    ) {}
}
