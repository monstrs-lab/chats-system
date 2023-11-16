import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelAdminLogEventActionChangeStickerSetValues {
    prevStickerset: any;
    newStickerset: any;
}

export class ChannelAdminLogEventActionChangeStickerSet extends TLConstructor<ChannelAdminLogEventActionChangeStickerSetValues> {
    static override CONSTRUCTOR_ID: number = 2982398631;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "prev_stickerset",
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
            "name": "new_stickerset",
            "type": "InputStickerSet",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get prevStickerset(): any {
        return this.values.prevStickerset
    }

    get newStickerset(): any {
        return this.values.newStickerset
    }
}
