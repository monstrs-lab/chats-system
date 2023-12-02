import { Injectable }      from '@nestjs/common'

import { GetStateUseCase } from './get-state.use-case.js'

@Injectable()
export class UpdatesUseCases {
  constructor(public readonly getState: GetStateUseCase) {}
}
