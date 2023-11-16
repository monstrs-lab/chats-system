import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputBotInlineResultValues {
    flags: any;
    id: string;
    type: string;
    title: string;
    description: string;
    url: string;
    thumb: any;
    content: any;
    sendMessage: any;
}

export class InputBotInlineResult extends TLConstructor<InputBotInlineResultValues> {
    static override CONSTRUCTOR_ID: number = 2294256409;
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
            "name": "title",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "description",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 2,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "url",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 3,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "thumb",
            "type": "InputWebDocument",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 4,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "content",
            "type": "InputWebDocument",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 5,
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

    get flags(): any {
        return this.values.flags
    }

    get id(): string {
        return this.values.id
    }

    get type(): string {
        return this.values.type
    }

    get title(): string {
        return this.values.title
    }

    get description(): string {
        return this.values.description
    }

    get url(): string {
        return this.values.url
    }

    get thumb(): any {
        return this.values.thumb
    }

    get content(): any {
        return this.values.content
    }

    get sendMessage(): any {
        return this.values.sendMessage
    }
}
