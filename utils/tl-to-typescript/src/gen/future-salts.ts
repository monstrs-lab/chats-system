import type { TLSchemaParamParsed } from "@chats-system/tl-json-schema-parser";
import { TLConstructor } from "@chats-system/tl-types";
import { future_salt } from "./future_salt.js";

export class FutureSalts extends TLConstructor {
    static override CONSTRUCTOR_ID: number = -1370486635;
    static override PARAMS: Array<TLSchemaParamParsed> = [
          {
            "name": "req_msg_id",
            "type": "long",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "now",
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
            "name": "salts",
            "type": "future_salt",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    constructor(public readonly req_msg_id: bigint, public readonly now: number, public readonly salts: Array<future_salt>) {
        super()
    }
}
