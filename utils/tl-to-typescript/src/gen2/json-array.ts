import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface JsonArrayValues {
    value: Array<any>;
}

export class JsonArray extends TLConstructor<JsonArrayValues> {
    static override CONSTRUCTOR_ID: number = 4148447075;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "value",
            "type": "JSONValue",
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
