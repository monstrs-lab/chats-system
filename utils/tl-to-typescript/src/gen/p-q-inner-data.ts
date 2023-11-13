import type { TLSchemaParamParsed } from "@chats-system/tl-json-schema-parser";
import { TLConstructor } from "@chats-system/tl-types";

export class PQInnerData extends TLConstructor {
    static override CONSTRUCTOR_ID: number = -2083955988;
    static override PARAMS: Array<TLSchemaParamParsed> = [
          {
            "name": "pq",
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
            "name": "p",
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
            "name": "q",
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
            "name": "nonce",
            "type": "int128",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "server_nonce",
            "type": "int128",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "new_nonce",
            "type": "int256",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    constructor(public readonly pq: string, public readonly p: string, public readonly q: string, public readonly nonce: bigint, public readonly server_nonce: bigint, public readonly new_nonce: bigint) {
        super()
    }
}
