import { TLRpcHandler } from '@chats-system/tl-rpc'
import { client }       from '@chats-system/help-rpc-client'
import TL               from '@chats-system/tl'

@TLRpcHandler(TL.help.GetCountriesList)
export class HelpGetCountriesListHandler {
  async execute(message: TL.help.GetCountriesList): Promise<TL.help.CountriesList> {
    const response = await client.getCountriesList({
      langCode: message.langCode,
      hash: message.hash,
    })

    return new TL.help.CountriesList({
      countries: response.countries.map(
        (country) =>
          new TL.help.Country({
            ...country,
            countryCodes: country.countryCodes.map(
              (countryCode) => new TL.help.CountryCode(countryCode)
            ),
          })
      ),
      hash: response.hash,
    })
  }
}
