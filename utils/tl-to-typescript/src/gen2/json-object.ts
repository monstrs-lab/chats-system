import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface JsonObjectValues {
    value: Array<any>;
}

export class JsonObject extends TLConstructor<JsonObjectValues> {
    static override CONSTRUCTOR_ID: number = 2579616925;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "value",
            "type": "JSONObjectValue",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get value(): Array<any> {
        return this.values.value
    }
}
