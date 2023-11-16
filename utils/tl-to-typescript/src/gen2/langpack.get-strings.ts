import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface LangpackGetStringsValues {
    langPack: string;
    langCode: string;
    keys: Array<string>;
}

export class LangpackGetStrings extends TLMethod<LangpackGetStringsValues> {
    static override CONSTRUCTOR_ID = 4025104387;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "lang_pack",
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
            "name": "keys",
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

    get langPack(): string {
        return this.values.langPack
    }

    get langCode(): string {
        return this.values.langCode
    }

    get keys(): Array<string> {
        return this.values.keys
    }
}
