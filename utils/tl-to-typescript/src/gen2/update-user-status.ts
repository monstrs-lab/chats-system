import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdateUserStatusValues {
    userId: bigint;
    status: any;
}

export class UpdateUserStatus extends TLConstructor<UpdateUserStatusValues> {
    static override CONSTRUCTOR_ID: number = 3854432478;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "user_id",
            "type": "long",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "status",
            "type": "UserStatus",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get userId(): bigint {
        return this.values.userId
    }

    get status(): any {
        return this.values.status
    }
}
