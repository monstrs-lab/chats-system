import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface MessagesGetStickersValues {
    emoticon: string;
    hash: bigint;
}

export class MessagesGetStickers extends TLMethod<MessagesGetStickersValues> {
    static override CONSTRUCTOR_ID = 3584414625;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "emoticon",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
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

    get emoticon(): string {
        return this.values.emoticon
    }

    get hash(): bigint {
        return this.values.hash
    }
}
