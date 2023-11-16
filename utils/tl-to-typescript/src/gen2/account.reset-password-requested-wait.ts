import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface AccountResetPasswordRequestedWaitValues {
    untilDate: number;
}

export class AccountResetPasswordRequestedWait extends TLConstructor<AccountResetPasswordRequestedWaitValues> {
    static override CONSTRUCTOR_ID: number = 3924819069;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "until_date",
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

    get untilDate(): number {
        return this.values.untilDate
    }
}
