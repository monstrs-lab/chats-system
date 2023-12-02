import type { CountryCode } from './country-code.entity.js'

export class Country {
  constructor(
    public readonly iso2: string,
    public readonly defaultName: string,
    public readonly countryCodes: Array<CountryCode> = []
  ) {}
}
