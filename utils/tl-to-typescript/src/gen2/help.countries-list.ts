import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface HelpCountriesListValues {
    countries: Array<any>;
    hash: number;
}

export class HelpCountriesList extends TLConstructor<HelpCountriesListValues> {
    static override CONSTRUCTOR_ID: number = 2278585758;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "countries",
            "type": "help.Country",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "hash",
            "type": "int",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get countries(): Array<any> {
        return this.values.countries
    }

    get hash(): number {
        return this.values.hash
    }
}
