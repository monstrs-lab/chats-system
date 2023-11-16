import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessagesStickerSetInstallResultArchiveValues {
    sets: Array<any>;
}

export class MessagesStickerSetInstallResultArchive extends TLConstructor<MessagesStickerSetInstallResultArchiveValues> {
    static override CONSTRUCTOR_ID: number = 904138920;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "sets",
            "type": "StickerSetCovered",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get sets(): Array<any> {
        return this.values.sets
    }
}
