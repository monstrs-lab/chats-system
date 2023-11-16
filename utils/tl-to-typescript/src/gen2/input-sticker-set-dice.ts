import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputStickerSetDiceValues {
    emoticon: string;
}

export class InputStickerSetDice extends TLConstructor<InputStickerSetDiceValues> {
    static override CONSTRUCTOR_ID: number = 3867103758;
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
