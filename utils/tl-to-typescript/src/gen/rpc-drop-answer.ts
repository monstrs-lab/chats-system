import type { TLSchemaParamParsed } from "@chats-system/tl-json-schema-parser";
import { TLMethod } from "@chats-system/tl-types";

export class RpcDropAnswer extends TLMethod {
    static override CONSTRUCTOR_ID = 1491380032;
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
          }
        ];

    constructor(public readonly reqMsgId: bigint) {
        super()
    }
}
