import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AccountSetPrivacyValues {
    key: any;
    rules: Array<any>;
}

export class AccountSetPrivacy extends TLMethod<AccountSetPrivacyValues> {
    static override CONSTRUCTOR_ID = 3388480744;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "key",
            "type": "InputPrivacyKey",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "rules",
            "type": "InputPrivacyRule",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get key(): any {
        return this.values.key
    }

    get rules(): Array<any> {
        return this.values.rules
    }
}
