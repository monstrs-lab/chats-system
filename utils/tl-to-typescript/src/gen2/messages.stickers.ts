import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessagesStickersValues {
    hash: bigint;
    stickers: Array<any>;
}

export class MessagesStickers extends TLConstructor<MessagesStickersValues> {
    static override CONSTRUCTOR_ID: number = 816245886;
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
          },
          {
            "name": "stickers",
            "type": "Document",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get hash(): bigint {
        return this.values.hash
    }

    get stickers(): Array<any> {
        return this.values.stickers
    }
}
