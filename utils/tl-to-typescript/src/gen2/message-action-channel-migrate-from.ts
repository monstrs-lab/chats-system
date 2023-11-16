import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessageActionChannelMigrateFromValues {
    title: string;
    chatId: bigint;
}

export class MessageActionChannelMigrateFrom extends TLConstructor<MessageActionChannelMigrateFromValues> {
    static override CONSTRUCTOR_ID: number = 3929622761;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "title",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
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

    get title(): string {
        return this.values.title
    }

    get chatId(): bigint {
        return this.values.chatId
    }
}
