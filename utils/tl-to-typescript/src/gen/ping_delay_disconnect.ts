import type { TLSchemaParamParsed } from "@chats-system/tl-json-schema-parser";
import { TLMethod } from "@chats-system/tl-types";

export class PingDelayDisconnect extends TLMethod {
    static override CONSTRUCTOR_ID = -213746804;
    static override PARAMS: Array<TLSchemaParamParsed> = [
          {
            "name": "ping_id",
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
            "name": "disconnect_delay",
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

    constructor(public readonly ping_id: any, public readonly disconnect_delay: any) {
        super()
    }
}
