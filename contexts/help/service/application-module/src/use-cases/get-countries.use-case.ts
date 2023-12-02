import type { Country }      from '@chats-system/help-domain-module'

import { Injectable }        from '@nestjs/common'

import { CountryRepository } from '@chats-system/help-domain-module'

@Injectable()
export class GetCountriesUseCase {
  constructor(private readonly countryRepository: CountryRepository) {}

  async execute(): Promise<Array<Country>> {
    return this.countryRepository.getAll()
  }
}
