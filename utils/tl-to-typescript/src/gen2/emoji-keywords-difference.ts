import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface EmojiKeywordsDifferenceValues {
    langCode: string;
    fromVersion: number;
    version: number;
    keywords: Array<any>;
}

export class EmojiKeywordsDifference extends TLConstructor<EmojiKeywordsDifferenceValues> {
    static override CONSTRUCTOR_ID: number = 1556570557;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "lang_code",
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
            "name": "from_version",
            "type": "int",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "version",
            "type": "int",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "keywords",
            "type": "EmojiKeyword",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get langCode(): string {
        return this.values.langCode
    }

    get fromVersion(): number {
        return this.values.fromVersion
    }

    get version(): number {
        return this.values.version
    }

    get keywords(): Array<any> {
        return this.values.keywords
    }
}
