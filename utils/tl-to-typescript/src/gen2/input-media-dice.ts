import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputMediaDiceValues {
    emoticon: string;
}

export class InputMediaDice extends TLConstructor<InputMediaDiceValues> {
    static override CONSTRUCTOR_ID: number = 3866083195;
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
