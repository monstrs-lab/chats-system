import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdateLangPackTooLongValues {
    langCode: string;
}

export class UpdateLangPackTooLong extends TLConstructor<UpdateLangPackTooLongValues> {
    static override CONSTRUCTOR_ID: number = 1180041828;
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
          }
        ];

    get langCode(): string {
        return this.values.langCode
    }
}
