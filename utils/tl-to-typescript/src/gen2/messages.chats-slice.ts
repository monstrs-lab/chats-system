import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessagesChatsSliceValues {
    count: number;
    chats: Array<any>;
}

export class MessagesChatsSlice extends TLConstructor<MessagesChatsSliceValues> {
    static override CONSTRUCTOR_ID: number = 2631405892;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "count",
            "type": "int",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
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

    get count(): number {
        return this.values.count
    }

    get chats(): Array<any> {
        return this.values.chats
    }
}
