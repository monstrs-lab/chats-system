import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputBotInlineResultPhotoValues {
    id: string;
    type: string;
    photo: any;
    sendMessage: any;
}

export class InputBotInlineResultPhoto extends TLConstructor<InputBotInlineResultPhotoValues> {
    static override CONSTRUCTOR_ID: number = 2832753831;
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
            "name": "type",
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
            "name": "photo",
            "type": "InputPhoto",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
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

    get type(): string {
        return this.values.type
    }

    get photo(): any {
        return this.values.photo
    }

    get sendMessage(): any {
        return this.values.sendMessage
    }
}
