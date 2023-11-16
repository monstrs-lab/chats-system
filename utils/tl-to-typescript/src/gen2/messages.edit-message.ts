import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface MessagesEditMessageValues {
    flags: any;
    noWebpage: boolean;
    peer: any;
    id: number;
    message: string;
    media: any;
    replyMarkup: any;
    entities: Array<any>;
    scheduleDate: number;
}

export class MessagesEditMessage extends TLMethod<MessagesEditMessageValues> {
    static override CONSTRUCTOR_ID = 1224152952;
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
            "name": "no_webpage",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "peer",
            "type": "InputPeer",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "id",
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
            "name": "message",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 11,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "media",
            "type": "InputMedia",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 14,
            "flagIndicator": false,
            "useVectorId": false
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
          },
          {
            "name": "entities",
            "type": "MessageEntity",
            "isVector": true,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 3,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "schedule_date",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 15,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get noWebpage(): boolean {
        return this.values.noWebpage
    }

    get peer(): any {
        return this.values.peer
    }

    get id(): number {
        return this.values.id
    }

    get message(): string {
        return this.values.message
    }

    get media(): any {
        return this.values.media
    }

    get replyMarkup(): any {
        return this.values.replyMarkup
    }

    get entities(): Array<any> {
        return this.values.entities
    }

    get scheduleDate(): number {
        return this.values.scheduleDate
    }
}
