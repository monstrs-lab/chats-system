import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface AccountAuthorizationFormValues {
    flags: any;
    requiredTypes: Array<any>;
    values: Array<any>;
    errors: Array<any>;
    users: Array<any>;
    privacyPolicyUrl: string;
}

export class AccountAuthorizationForm extends TLConstructor<AccountAuthorizationFormValues> {
    static override CONSTRUCTOR_ID: number = 2905480408;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "flags",
            "type": "#",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": true,
            "useVectorId": false
          },
          {
            "name": "required_types",
            "type": "SecureRequiredType",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "values",
            "type": "SecureValue",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "errors",
            "type": "SecureValueError",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "users",
            "type": "User",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "privacy_policy_url",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 0,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get requiredTypes(): Array<any> {
        return this.values.requiredTypes
    }

    get values(): Array<any> {
        return this.values.values
    }

    get errors(): Array<any> {
        return this.values.errors
    }

    get users(): Array<any> {
        return this.values.users
    }

    get privacyPolicyUrl(): string {
        return this.values.privacyPolicyUrl
    }
}
