import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AccountToggleUsernameValues {
    username: string;
    active: any;
}

export class AccountToggleUsername extends TLMethod<AccountToggleUsernameValues> {
    static override CONSTRUCTOR_ID = 1490465654;
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
          },
          {
            "name": "active",
            "type": "Bool",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get username(): string {
        return this.values.username
    }

    get active(): any {
        return this.values.active
    }
}
