import { Injectable }      from '@nestjs/common'

import { SendCodeUseCase } from './send-code.use-case.js'
import { SignInUseCase }   from './sign-in.use-case.js'

@Injectable()
export class AuthUseCases {
  constructor(
    public readonly sendCode: SendCodeUseCase,
    public readonly signIn: SignInUseCase
  ) {}
}
