import type { TLSchemaParamParsed } from "@chats-system/tl-json-schema-parser";
import { TLMethod } from "@chats-system/tl-types";

export class GetFutureSalts extends TLMethod {
    static override CONSTRUCTOR_ID = -1188971260;
    static override PARAMS: Array<TLSchemaParamParsed> = [
          {
            "name": "num",
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

    constructor(public readonly num: number) {
        super()
    }
}
