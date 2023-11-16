import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AccountGetTmpPasswordValues {
    password: any;
    period: number;
}

export class AccountGetTmpPassword extends TLMethod<AccountGetTmpPasswordValues> {
    static override CONSTRUCTOR_ID = 1151208273;
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
          },
          {
            "name": "period",
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

    get password(): any {
        return this.values.password
    }

    get period(): number {
        return this.values.period
    }
}
