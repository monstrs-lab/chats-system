import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface EmojiURLValues {
    url: string;
}

export class EmojiURL extends TLConstructor<EmojiURLValues> {
    static override CONSTRUCTOR_ID: number = 2775937949;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "url",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get url(): string {
        return this.values.url
    }
}
