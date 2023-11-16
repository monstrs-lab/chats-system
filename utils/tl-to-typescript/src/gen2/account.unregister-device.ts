import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AccountUnregisterDeviceValues {
    tokenType: number;
    token: string;
    otherUids: Array<bigint>;
}

export class AccountUnregisterDevice extends TLMethod<AccountUnregisterDeviceValues> {
    static override CONSTRUCTOR_ID = 1779249670;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "token_type",
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
            "name": "token",
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
            "name": "other_uids",
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

    get tokenType(): number {
        return this.values.tokenType
    }

    get token(): string {
        return this.values.token
    }

    get otherUids(): Array<bigint> {
        return this.values.otherUids
    }
}
