import { Injectable }      from '@nestjs/common'

import { SendCodeUseCase } from './send-code.use-case.js'
import { SignUpUseCase } from './sign-up.use-case.js'

@Injectable()
export class UseCases {
  constructor(public readonly sendCode: SendCodeUseCase,
    public readonly signUp: SignUpUseCase
    ) {}
}
