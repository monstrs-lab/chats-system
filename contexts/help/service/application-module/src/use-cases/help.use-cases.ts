import { Injectable }          from '@nestjs/common'

import { GetConfigUseCase }    from './get-config.use-case.js'
import { GetCountriesUseCase } from './get-countries.use-case.js'

@Injectable()
export class HelpUseCases {
  constructor(
    public readonly getConfig: GetConfigUseCase,
    public readonly getCountries: GetCountriesUseCase
  ) {}
}
