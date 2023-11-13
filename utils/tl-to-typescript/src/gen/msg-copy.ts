import type { TLSchemaParamParsed } from "@chats-system/tl-json-schema-parser";
import { TLConstructor } from "@chats-system/tl-types";

export class MsgCopy extends TLConstructor {
    static override CONSTRUCTOR_ID: number = -530561358;
    static override PARAMS: Array<TLSchemaParamParsed> = [
          {
            "name": "orig_message",
            "type": "Message",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    constructor(public readonly orig_message: any) {
        super()
    }
}
