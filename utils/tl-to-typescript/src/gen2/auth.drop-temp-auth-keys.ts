import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AuthDropTempAuthKeysValues {
    exceptAuthKeys: Array<bigint>;
}

export class AuthDropTempAuthKeys extends TLMethod<AuthDropTempAuthKeysValues> {
    static override CONSTRUCTOR_ID = 2387124616;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "except_auth_keys",
            "type": "long",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get exceptAuthKeys(): Array<bigint> {
        return this.values.exceptAuthKeys
    }
}
