import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AccountSendVerifyPhoneCodeValues {
    phoneNumber: string;
    settings: any;
}

export class AccountSendVerifyPhoneCode extends TLMethod<AccountSendVerifyPhoneCodeValues> {
    static override CONSTRUCTOR_ID = 2778945273;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "phone_number",
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
            "name": "settings",
            "type": "CodeSettings",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get phoneNumber(): string {
        return this.values.phoneNumber
    }

    get settings(): any {
        return this.values.settings
    }
}
