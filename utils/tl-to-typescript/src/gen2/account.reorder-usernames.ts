import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AccountReorderUsernamesValues {
    order: Array<string>;
}

export class AccountReorderUsernames extends TLMethod<AccountReorderUsernamesValues> {
    static override CONSTRUCTOR_ID = 4015001259;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "order",
            "type": "string",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get order(): Array<string> {
        return this.values.order
    }
}
