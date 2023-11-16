import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface NearestDcValues {
    country: string;
    thisDc: number;
    nearestDc: number;
}

export class NearestDc extends TLConstructor<NearestDcValues> {
    static override CONSTRUCTOR_ID: number = 2384074613;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "country",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "this_dc",
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
            "name": "nearest_dc",
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

    get country(): string {
        return this.values.country
    }

    get thisDc(): number {
        return this.values.thisDc
    }

    get nearestDc(): number {
        return this.values.nearestDc
    }
}
