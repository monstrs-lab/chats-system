import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface UsersGetFullUserValues {
    id: any;
}

export class UsersGetFullUser extends TLMethod<UsersGetFullUserValues> {
    static override CONSTRUCTOR_ID = 3054459160;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "id",
            "type": "InputUser",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get id(): any {
        return this.values.id
    }
}
