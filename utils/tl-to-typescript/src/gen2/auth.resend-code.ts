import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AuthResendCodeValues {
    phoneNumber: string;
    phoneCodeHash: string;
}

export class AuthResendCode extends TLMethod<AuthResendCodeValues> {
    static override CONSTRUCTOR_ID = 1056025023;
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
            "name": "phone_code_hash",
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

    get phoneNumber(): string {
        return this.values.phoneNumber
    }

    get phoneCodeHash(): string {
        return this.values.phoneCodeHash
    }
}
