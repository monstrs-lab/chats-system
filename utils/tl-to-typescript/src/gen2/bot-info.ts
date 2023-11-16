import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface BotInfoValues {
    flags: any;
    userId: bigint;
    description: string;
    descriptionPhoto: any;
    descriptionDocument: any;
    commands: Array<any>;
    menuButton: any;
}

export class BotInfo extends TLConstructor<BotInfoValues> {
    static override CONSTRUCTOR_ID: number = 2402290519;
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
            "name": "user_id",
            "type": "long",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 0,
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
            "flagIndex": 1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "description_photo",
            "type": "Photo",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 4,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "description_document",
            "type": "Document",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 5,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "commands",
            "type": "BotCommand",
            "isVector": true,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 2,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "menu_button",
            "type": "BotMenuButton",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 3,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get userId(): bigint {
        return this.values.userId
    }

    get description(): string {
        return this.values.description
    }

    get descriptionPhoto(): any {
        return this.values.descriptionPhoto
    }

    get descriptionDocument(): any {
        return this.values.descriptionDocument
    }

    get commands(): Array<any> {
        return this.values.commands
    }

    get menuButton(): any {
        return this.values.menuButton
    }
}
