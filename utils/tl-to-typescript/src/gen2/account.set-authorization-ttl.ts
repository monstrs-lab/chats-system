import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AccountSetAuthorizationTTLValues {
    authorizationTtlDays: number;
}

export class AccountSetAuthorizationTTL extends TLMethod<AccountSetAuthorizationTTLValues> {
    static override CONSTRUCTOR_ID = 3213466272;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "authorization_ttl_days",
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

    get authorizationTtlDays(): number {
        return this.values.authorizationTtlDays
    }
}
