import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface HelpPassportConfigValues {
    hash: number;
    countriesLangs: any;
}

export class HelpPassportConfig extends TLConstructor<HelpPassportConfigValues> {
    static override CONSTRUCTOR_ID: number = 2694370991;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
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
          },
          {
            "name": "countries_langs",
            "type": "DataJSON",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get hash(): number {
        return this.values.hash
    }

    get countriesLangs(): any {
        return this.values.countriesLangs
    }
}
