import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface EmailVerificationGoogleValues {
    token: string;
}

export class EmailVerificationGoogle extends TLConstructor<EmailVerificationGoogleValues> {
    static override CONSTRUCTOR_ID: number = 3683688130;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "token",
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

    get token(): string {
        return this.values.token
    }
}
