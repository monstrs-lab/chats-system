import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface StickerKeywordValues {
    documentId: bigint;
    keyword: Array<string>;
}

export class StickerKeyword extends TLConstructor<StickerKeywordValues> {
    static override CONSTRUCTOR_ID: number = 4244550300;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "document_id",
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
            "name": "keyword",
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

    get documentId(): bigint {
        return this.values.documentId
    }

    get keyword(): Array<string> {
        return this.values.keyword
    }
}
