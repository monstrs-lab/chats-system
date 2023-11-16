import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface DataJSONValues {
    data: string;
}

export class DataJSON extends TLConstructor<DataJSONValues> {
    static override CONSTRUCTOR_ID: number = 2104790276;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "data",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get data(): string {
        return this.values.data
    }
}
