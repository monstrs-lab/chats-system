import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputPrivacyValueAllowUsersValues {
    users: Array<any>;
}

export class InputPrivacyValueAllowUsers extends TLConstructor<InputPrivacyValueAllowUsersValues> {
    static override CONSTRUCTOR_ID: number = 320652927;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "users",
            "type": "InputUser",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get users(): Array<any> {
        return this.values.users
    }
}
