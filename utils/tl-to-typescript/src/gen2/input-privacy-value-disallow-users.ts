import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputPrivacyValueDisallowUsersValues {
    users: Array<any>;
}

export class InputPrivacyValueDisallowUsers extends TLConstructor<InputPrivacyValueDisallowUsersValues> {
    static override CONSTRUCTOR_ID: number = 2417034343;
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
