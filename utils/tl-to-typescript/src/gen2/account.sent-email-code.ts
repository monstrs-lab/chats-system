import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface AccountSentEmailCodeValues {
    emailPattern: string;
    length: number;
}

export class AccountSentEmailCode extends TLConstructor<AccountSentEmailCodeValues> {
    static override CONSTRUCTOR_ID: number = 2166326607;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "email_pattern",
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
            "name": "length",
            "type": "int",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get emailPattern(): string {
        return this.values.emailPattern
    }

    get length(): number {
        return this.values.length
    }
}
