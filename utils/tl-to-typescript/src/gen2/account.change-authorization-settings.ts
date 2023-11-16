import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AccountChangeAuthorizationSettingsValues {
    flags: any;
    hash: bigint;
    encryptedRequestsDisabled: any;
    callRequestsDisabled: any;
}

export class AccountChangeAuthorizationSettings extends TLMethod<AccountChangeAuthorizationSettingsValues> {
    static override CONSTRUCTOR_ID = 1089766498;
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
            "name": "hash",
            "type": "long",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "encrypted_requests_disabled",
            "type": "Bool",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 0,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "call_requests_disabled",
            "type": "Bool",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get hash(): bigint {
        return this.values.hash
    }

    get encryptedRequestsDisabled(): any {
        return this.values.encryptedRequestsDisabled
    }

    get callRequestsDisabled(): any {
        return this.values.callRequestsDisabled
    }
}
