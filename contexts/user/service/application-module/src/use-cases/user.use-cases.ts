import { Injectable }                from '@nestjs/common'

import { CreateUserUseCase }         from './create-user.use-case.js'
import { GetUserContactsUseCase }    from './get-user-contacts.use-case.js'
import { GetUserUseCase }            from './get-user.use-case.js'
import { GetUsersUseCase }           from './get-users.use-case.js'
import { ImportUserContactsUseCase } from './import-user-contacts.use-case.js'

@Injectable()
export class UserUseCases {
  constructor(
    public readonly createUser: CreateUserUseCase,
    public readonly getUser: GetUserUseCase,
    public readonly getUsers: GetUsersUseCase,
    public readonly getUserContacts: GetUserContactsUseCase,
    public readonly importUserContacts: ImportUserContactsUseCase
  ) {}
}
