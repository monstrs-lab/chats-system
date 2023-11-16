import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface MessagesGetCommonChatsValues {
    userId: any;
    maxId: bigint;
    limit: number;
}

export class MessagesGetCommonChats extends TLMethod<MessagesGetCommonChatsValues> {
    static override CONSTRUCTOR_ID = 3826032900;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "user_id",
            "type": "InputUser",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "max_id",
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
            "name": "limit",
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

    get userId(): any {
        return this.values.userId
    }

    get maxId(): bigint {
        return this.values.maxId
    }

    get limit(): number {
        return this.values.limit
    }
}
