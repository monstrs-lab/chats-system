import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface VideoSizeStickerMarkupValues {
    stickerset: any;
    stickerId: bigint;
    backgroundColors: Array<number>;
}

export class VideoSizeStickerMarkup extends TLConstructor<VideoSizeStickerMarkupValues> {
    static override CONSTRUCTOR_ID: number = 228623102;
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
            "name": "sticker_id",
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
            "name": "background_colors",
            "type": "int",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get stickerset(): any {
        return this.values.stickerset
    }

    get stickerId(): bigint {
        return this.values.stickerId
    }

    get backgroundColors(): Array<number> {
        return this.values.backgroundColors
    }
}
