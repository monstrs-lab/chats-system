import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface MessagesMigrateChatValues {
    chatId: bigint;
}

export class MessagesMigrateChat extends TLMethod<MessagesMigrateChatValues> {
    static override CONSTRUCTOR_ID = 2726777625;
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
