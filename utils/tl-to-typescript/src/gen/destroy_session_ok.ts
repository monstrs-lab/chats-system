import type { TLSchemaParamParsed } from "@chats-system/tl-json-schema-parser";
import { TLConstructor } from "@chats-system/tl-types";

export class DestroySessionOk extends TLConstructor {
    static override CONSTRUCTOR_ID: number = -501201412;
    static override PARAMS: Array<TLSchemaParamParsed> = [
          {
            "name": "session_id",
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

    constructor(public readonly session_id: any) {
        super()
    }
}
