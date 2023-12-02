import { Injectable }        from '@nestjs/common'
import { countries }         from 'countries-list'

import { Country }           from '@chats-system/help-domain-module'
import { CountryCode }       from '@chats-system/help-domain-module'
import { CountryRepository } from '@chats-system/help-domain-module'

@Injectable()
export class CountryRepositoryImpl extends CountryRepository {
  #countries!: Array<Country>

  override async getAll(): Promise<Array<Country>> {
    if (!this.#countries) {
      this.#countries = Object.entries(countries).map(
        ([code, country]) =>
          new Country(
            code,
            country.native,
            country.phone.map((phone) => new CountryCode(String(phone)))
          )
      )
    }

    return this.#countries
  }
}
