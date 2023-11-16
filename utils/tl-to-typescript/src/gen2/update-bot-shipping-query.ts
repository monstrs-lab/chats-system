import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdateBotShippingQueryValues {
    queryId: bigint;
    userId: bigint;
    payload: Buffer;
    shippingAddress: any;
}

export class UpdateBotShippingQuery extends TLConstructor<UpdateBotShippingQueryValues> {
    static override CONSTRUCTOR_ID: number = 3048144253;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "query_id",
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
            "name": "payload",
            "type": "bytes",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "shipping_address",
            "type": "PostAddress",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get queryId(): bigint {
        return this.values.queryId
    }

    get userId(): bigint {
        return this.values.userId
    }

    get payload(): Buffer {
        return this.values.payload
    }

    get shippingAddress(): any {
        return this.values.shippingAddress
    }
}
