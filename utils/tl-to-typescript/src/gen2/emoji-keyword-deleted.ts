import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface EmojiKeywordDeletedValues {
    keyword: string;
    emoticons: Array<string>;
}

export class EmojiKeywordDeleted extends TLConstructor<EmojiKeywordDeletedValues> {
    static override CONSTRUCTOR_ID: number = 594408994;
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
