import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface LangpackGetLanguagesValues {
    langPack: string;
}

export class LangpackGetLanguages extends TLMethod<LangpackGetLanguagesValues> {
    static override CONSTRUCTOR_ID = 1120311183;
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
          }
        ];

    get langPack(): string {
        return this.values.langPack
    }
}
