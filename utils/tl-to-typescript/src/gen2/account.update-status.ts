import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AccountUpdateStatusValues {
    offline: any;
}

export class AccountUpdateStatus extends TLMethod<AccountUpdateStatusValues> {
    static override CONSTRUCTOR_ID = 1713919532;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "offline",
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

    get offline(): any {
        return this.values.offline
    }
}
