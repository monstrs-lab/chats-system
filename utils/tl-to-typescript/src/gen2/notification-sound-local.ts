import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface NotificationSoundLocalValues {
    title: string;
    data: string;
}

export class NotificationSoundLocal extends TLConstructor<NotificationSoundLocalValues> {
    static override CONSTRUCTOR_ID: number = 2198575844;
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
            "name": "data",
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

    get title(): string {
        return this.values.title
    }

    get data(): string {
        return this.values.data
    }
}
