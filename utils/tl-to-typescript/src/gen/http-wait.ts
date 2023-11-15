import type { TLSchemaParamParsed } from "@chats-system/tl-json-schema-parser";
import { TLMethod } from "@chats-system/tl-types";

export class HttpWait extends TLMethod {
    static override CONSTRUCTOR_ID = -1835453025;
    static override PARAMS: Array<TLSchemaParamParsed> = [
          {
            "name": "max_delay",
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
            "name": "wait_after",
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
            "name": "max_wait",
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

    constructor(public readonly maxDelay: number, public readonly waitAfter: number, public readonly maxWait: number) {
        super()
    }
}
