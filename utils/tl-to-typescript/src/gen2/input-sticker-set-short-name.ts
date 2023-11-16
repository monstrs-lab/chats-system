import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputStickerSetShortNameValues {
    shortName: string;
}

export class InputStickerSetShortName extends TLConstructor<InputStickerSetShortNameValues> {
    static override CONSTRUCTOR_ID: number = 2250033312;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
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
          }
        ];

    get shortName(): string {
        return this.values.shortName
    }
}
