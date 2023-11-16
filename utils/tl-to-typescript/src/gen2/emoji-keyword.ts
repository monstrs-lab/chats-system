import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface EmojiKeywordValues {
    keyword: string;
    emoticons: Array<string>;
}

export class EmojiKeyword extends TLConstructor<EmojiKeywordValues> {
    static override CONSTRUCTOR_ID: number = 3585325561;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "keyword",
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
            "name": "emoticons",
            "type": "string",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get keyword(): string {
        return this.values.keyword
    }

    get emoticons(): Array<string> {
        return this.values.emoticons
    }
}
