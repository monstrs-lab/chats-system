import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface MessagesUninstallStickerSetValues {
    stickerset: any;
}

export class MessagesUninstallStickerSet extends TLMethod<MessagesUninstallStickerSetValues> {
    static override CONSTRUCTOR_ID = 4184757726;
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
          }
        ];

    get stickerset(): any {
        return this.values.stickerset
    }
}
