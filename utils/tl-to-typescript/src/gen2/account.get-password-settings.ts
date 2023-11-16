import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AccountGetPasswordSettingsValues {
    password: any;
}

export class AccountGetPasswordSettings extends TLMethod<AccountGetPasswordSettingsValues> {
    static override CONSTRUCTOR_ID = 2631199481;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "password",
            "type": "InputCheckPasswordSRP",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get password(): any {
        return this.values.password
    }
}
