import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SendMessageEmojiInteractionSeenValues {
    emoticon: string;
}

export class SendMessageEmojiInteractionSeen extends TLConstructor<SendMessageEmojiInteractionSeenValues> {
    static override CONSTRUCTOR_ID: number = 3060109358;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "emoticon",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get emoticon(): string {
        return this.values.emoticon
    }
}
