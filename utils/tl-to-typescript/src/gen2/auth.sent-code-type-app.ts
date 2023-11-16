import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface AuthSentCodeTypeAppValues {
    length: number;
}

export class AuthSentCodeTypeApp extends TLConstructor<AuthSentCodeTypeAppValues> {
    static override CONSTRUCTOR_ID: number = 1035688326;
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
