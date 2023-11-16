import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AccountUpdateUsernameValues {
    username: string;
}

export class AccountUpdateUsername extends TLMethod<AccountUpdateUsernameValues> {
    static override CONSTRUCTOR_ID = 1040964988;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "username",
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

    get username(): string {
        return this.values.username
    }
}
