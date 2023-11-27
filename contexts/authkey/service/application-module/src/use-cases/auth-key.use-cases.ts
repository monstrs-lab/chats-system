import { Injectable }                         from '@nestjs/common'

import { CreateAuthKeyConnectionUseCase }     from './create-auth-key-connection.use-case.js'
import { CreateAuthKeyUserUseCase }           from './create-auth-key-user.use-case.js'
import { CreateAuthKeyUseCase }               from './create-auth-key.use-case.js'
import { GetAuthKeyByIdUseCase }              from './get-auth-key-by-id.use-case.js'
import { GetAuthKeyConnectionKeyByIdUseCase } from './get-auth-key-connection-by-id.use-case.js'
import { GetAuthKeyUserKeyByIdUseCase }       from './get-auth-key-user-by-id.use-case.js'
import { UpdateAuthKeyConnectionUseCase }     from './update-auth-key-connection.use-case.js'

@Injectable()
export class AuthKeyUseCases {
  constructor(
    public readonly createAuthKeyUser: CreateAuthKeyUserUseCase,
    public readonly createAuthKey: CreateAuthKeyUseCase,
    public readonly createAuthKeyConnection: CreateAuthKeyConnectionUseCase,
    public readonly updateAuthKeyConnection: UpdateAuthKeyConnectionUseCase,
    public readonly getAuthKeyById: GetAuthKeyByIdUseCase,
    public readonly getAuthKeyConnectionKeyById: GetAuthKeyConnectionKeyByIdUseCase,
    public readonly getAuthKeyUserKeyById: GetAuthKeyUserKeyByIdUseCase
  ) {}
}
