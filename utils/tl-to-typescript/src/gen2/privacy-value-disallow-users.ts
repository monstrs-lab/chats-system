import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PrivacyValueDisallowUsersValues {
    users: Array<bigint>;
}

export class PrivacyValueDisallowUsers extends TLConstructor<PrivacyValueDisallowUsersValues> {
    static override CONSTRUCTOR_ID: number = 3831632193;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "users",
            "type": "long",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get users(): Array<bigint> {
        return this.values.users
    }
}
