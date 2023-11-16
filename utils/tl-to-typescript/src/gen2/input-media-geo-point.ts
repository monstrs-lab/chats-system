import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputMediaGeoPointValues {
    geoPoint: any;
}

export class InputMediaGeoPoint extends TLConstructor<InputMediaGeoPointValues> {
    static override CONSTRUCTOR_ID: number = 4190388548;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "geo_point",
            "type": "InputGeoPoint",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get geoPoint(): any {
        return this.values.geoPoint
    }
}
