import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputStickerSetThumbValues {
    stickerset: any;
    thumbVersion: number;
}

export class InputStickerSetThumb extends TLConstructor<InputStickerSetThumbValues> {
    static override CONSTRUCTOR_ID: number = 2642736091;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "stickerset",
            "type": "InputStickerSet",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "thumb_version",
            "type": "int",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get stickerset(): any {
        return this.values.stickerset
    }

    get thumbVersion(): number {
        return this.values.thumbVersion
    }
}
