import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessagesChatsValues {
    chats: Array<any>;
}

export class MessagesChats extends TLConstructor<MessagesChatsValues> {
    static override CONSTRUCTOR_ID: number = 1694474197;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "chats",
            "type": "Chat",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get chats(): Array<any> {
        return this.values.chats
    }
}
