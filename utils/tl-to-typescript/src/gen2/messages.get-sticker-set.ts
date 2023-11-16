import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface MessagesGetStickerSetValues {
    stickerset: any;
    hash: number;
}

export class MessagesGetStickerSet extends TLMethod<MessagesGetStickerSetValues> {
    static override CONSTRUCTOR_ID = 3365989492;
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
            "name": "hash",
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

    get hash(): number {
        return this.values.hash
    }
}
