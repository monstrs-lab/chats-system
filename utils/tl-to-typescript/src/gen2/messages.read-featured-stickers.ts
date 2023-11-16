import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface MessagesReadFeaturedStickersValues {
    id: Array<bigint>;
}

export class MessagesReadFeaturedStickers extends TLMethod<MessagesReadFeaturedStickersValues> {
    static override CONSTRUCTOR_ID = 1527873830;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "id",
            "type": "long",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get id(): Array<bigint> {
        return this.values.id
    }
}
