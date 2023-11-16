import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AuthImportLoginTokenValues {
    token: Buffer;
}

export class AuthImportLoginToken extends TLMethod<AuthImportLoginTokenValues> {
    static override CONSTRUCTOR_ID = 2511101156;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "token",
            "type": "bytes",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get token(): Buffer {
        return this.values.token
    }
}
