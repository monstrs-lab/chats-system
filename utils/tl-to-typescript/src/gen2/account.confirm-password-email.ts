import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AccountConfirmPasswordEmailValues {
    code: string;
}

export class AccountConfirmPasswordEmail extends TLMethod<AccountConfirmPasswordEmailValues> {
    static override CONSTRUCTOR_ID = 2413762848;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "code",
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

    get code(): string {
        return this.values.code
    }
}
