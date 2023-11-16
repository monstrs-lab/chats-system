import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface MessagesGetMessagesValues {
    id: Array<any>;
}

export class MessagesGetMessages extends TLMethod<MessagesGetMessagesValues> {
    static override CONSTRUCTOR_ID = 1673946374;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "id",
            "type": "InputMessage",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get id(): Array<any> {
        return this.values.id
    }
}
