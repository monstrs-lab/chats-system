import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface BotInlineMessageMediaAutoValues {
    flags: any;
    message: string;
    entities: Array<any>;
    replyMarkup: any;
}

export class BotInlineMessageMediaAuto extends TLConstructor<BotInlineMessageMediaAutoValues> {
    static override CONSTRUCTOR_ID: number = 1984755728;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "flags",
            "type": "#",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": true,
            "useVectorId": false
          },
          {
            "name": "message",
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
            "name": "entities",
            "type": "MessageEntity",
            "isVector": true,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "reply_markup",
            "type": "ReplyMarkup",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 2,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get message(): string {
        return this.values.message
    }

    get entities(): Array<any> {
        return this.values.entities
    }

    get replyMarkup(): any {
        return this.values.replyMarkup
    }
}
