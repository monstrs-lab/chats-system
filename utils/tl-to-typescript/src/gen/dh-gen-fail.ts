import type { TLSchemaParamParsed } from "@chats-system/tl-json-schema-parser";
import { TLConstructor } from "@chats-system/tl-types";

export class DhGenFail extends TLConstructor {
    static override CONSTRUCTOR_ID: number = -1499615742;
    static override PARAMS: Array<TLSchemaParamParsed> = [
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
            "name": "new_nonce_hash3",
            "type": "int128",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    constructor(public readonly nonce: bigint, public readonly serverNonce: bigint, public readonly newNonceHash3: bigint) {
        super()
    }
}
