import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface LangPackStringDeletedValues {
    key: string;
}

export class LangPackStringDeleted extends TLConstructor<LangPackStringDeletedValues> {
    static override CONSTRUCTOR_ID: number = 695856818;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "key",
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

    get key(): string {
        return this.values.key
    }
}
