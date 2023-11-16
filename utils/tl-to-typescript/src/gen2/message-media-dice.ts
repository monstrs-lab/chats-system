import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessageMediaDiceValues {
    value: number;
    emoticon: string;
}

export class MessageMediaDice extends TLConstructor<MessageMediaDiceValues> {
    static override CONSTRUCTOR_ID: number = 1065280907;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "value",
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

    get value(): number {
        return this.values.value
    }

    get emoticon(): string {
        return this.values.emoticon
    }
}
