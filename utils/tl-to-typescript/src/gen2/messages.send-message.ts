import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface MessagesSendMessageValues {
    flags: any;
    noWebpage: boolean;
    silent: boolean;
    background: boolean;
    clearDraft: boolean;
    noforwards: boolean;
    updateStickersetsOrder: boolean;
    peer: any;
    replyToMsgId: number;
    topMsgId: number;
    message: string;
    randomId: bigint;
    replyMarkup: any;
    entities: Array<any>;
    scheduleDate: number;
    sendAs: any;
}

export class MessagesSendMessage extends TLMethod<MessagesSendMessageValues> {
    static override CONSTRUCTOR_ID = 482476935;
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
            "name": "silent",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 5,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "background",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 6,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "clear_draft",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 7,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "noforwards",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 14,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "update_stickersets_order",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 15,
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
            "name": "reply_to_msg_id",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 0,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "top_msg_id",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 9,
            "flagIndicator": false,
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
            "name": "random_id",
            "type": "long",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
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
            "flagIndex": 10,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "send_as",
            "type": "InputPeer",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 13,
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

    get silent(): boolean {
        return this.values.silent
    }

    get background(): boolean {
        return this.values.background
    }

    get clearDraft(): boolean {
        return this.values.clearDraft
    }

    get noforwards(): boolean {
        return this.values.noforwards
    }

    get updateStickersetsOrder(): boolean {
        return this.values.updateStickersetsOrder
    }

    get peer(): any {
        return this.values.peer
    }

    get replyToMsgId(): number {
        return this.values.replyToMsgId
    }

    get topMsgId(): number {
        return this.values.topMsgId
    }

    get message(): string {
        return this.values.message
    }

    get randomId(): bigint {
        return this.values.randomId
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

    get sendAs(): any {
        return this.values.sendAs
    }
}
