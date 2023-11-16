import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputBotInlineResultGameValues {
    id: string;
    shortName: string;
    sendMessage: any;
}

export class InputBotInlineResultGame extends TLConstructor<InputBotInlineResultGameValues> {
    static override CONSTRUCTOR_ID: number = 1336154098;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "id",
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
            "name": "short_name",
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
            "name": "send_message",
            "type": "InputBotInlineMessage",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get id(): string {
        return this.values.id
    }

    get shortName(): string {
        return this.values.shortName
    }

    get sendMessage(): any {
        return this.values.sendMessage
    }
}
