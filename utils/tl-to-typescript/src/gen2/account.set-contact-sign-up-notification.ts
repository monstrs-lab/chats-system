import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AccountSetContactSignUpNotificationValues {
    silent: any;
}

export class AccountSetContactSignUpNotification extends TLMethod<AccountSetContactSignUpNotificationValues> {
    static override CONSTRUCTOR_ID = 3488890721;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "silent",
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

    get silent(): any {
        return this.values.silent
    }
}
