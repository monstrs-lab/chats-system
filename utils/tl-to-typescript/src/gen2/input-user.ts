import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputUserValues {
    userId: bigint;
    accessHash: bigint;
}

export class InputUser extends TLConstructor<InputUserValues> {
    static override CONSTRUCTOR_ID: number = 4061223110;
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
            "name": "access_hash",
            "type": "long",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get userId(): bigint {
        return this.values.userId
    }

    get accessHash(): bigint {
        return this.values.accessHash
    }
}
