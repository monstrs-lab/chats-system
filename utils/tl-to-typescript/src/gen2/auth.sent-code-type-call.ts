import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface AuthSentCodeTypeCallValues {
    length: number;
}

export class AuthSentCodeTypeCall extends TLConstructor<AuthSentCodeTypeCallValues> {
    static override CONSTRUCTOR_ID: number = 1398007207;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "length",
            "type": "int",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get length(): number {
        return this.values.length
    }
}
