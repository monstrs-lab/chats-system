import type { Country } from '../entities/index.js'

export abstract class CountryRepository {
  abstract getAll(): Promise<Array<Country>>
}
