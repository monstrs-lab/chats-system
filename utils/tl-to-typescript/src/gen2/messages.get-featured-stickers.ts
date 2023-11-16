import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface MessagesGetFeaturedStickersValues {
    hash: bigint;
}

export class MessagesGetFeaturedStickers extends TLMethod<MessagesGetFeaturedStickersValues> {
    static override CONSTRUCTOR_ID = 1685588756;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "hash",
            "type": "long",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get hash(): bigint {
        return this.values.hash
    }
}
