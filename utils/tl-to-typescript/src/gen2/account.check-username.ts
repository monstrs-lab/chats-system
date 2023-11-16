import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AccountCheckUsernameValues {
    username: string;
}

export class AccountCheckUsername extends TLMethod<AccountCheckUsernameValues> {
    static override CONSTRUCTOR_ID = 655677548;
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
