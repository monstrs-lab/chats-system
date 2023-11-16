import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface MessagesDeleteChatValues {
    chatId: bigint;
}

export class MessagesDeleteChat extends TLMethod<MessagesDeleteChatValues> {
    static override CONSTRUCTOR_ID = 1540419152;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "chat_id",
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

    get chatId(): bigint {
        return this.values.chatId
    }
}
