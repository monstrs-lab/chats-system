import { Injectable }         from '@nestjs/common'

import { SendCodeDtoUseCase } from './send-code.use-case.js'

@Injectable()
export class AuthUseCases {
  constructor(public readonly sendCode: SendCodeDtoUseCase) {}
}
