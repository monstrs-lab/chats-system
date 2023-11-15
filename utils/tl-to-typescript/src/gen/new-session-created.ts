import type { TLSchemaParamParsed } from "@chats-system/tl-json-schema-parser";
import { TLConstructor } from "@chats-system/tl-types";

export class NewSessionCreated extends TLConstructor {
    static override CONSTRUCTOR_ID: number = -1631450872;
    static override PARAMS: Array<TLSchemaParamParsed> = [
          {
            "name": "first_msg_id",
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
            "name": "unique_id",
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
            "name": "server_salt",
            "type": "long",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    constructor(public readonly firstMsgId: bigint, public readonly uniqueId: bigint, public readonly serverSalt: bigint) {
        super()
    }
}
