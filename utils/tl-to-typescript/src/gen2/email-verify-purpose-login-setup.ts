import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface EmailVerifyPurposeLoginSetupValues {
    phoneNumber: string;
    phoneCodeHash: string;
}

export class EmailVerifyPurposeLoginSetup extends TLConstructor<EmailVerifyPurposeLoginSetupValues> {
    static override CONSTRUCTOR_ID: number = 1128644211;
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
