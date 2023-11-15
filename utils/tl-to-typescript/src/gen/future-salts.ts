import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";
import { future_salt } from "./future_salt.js";
import { future_salt } from "./future_salt.js";

interface FutureSaltsValues {
    reqMsgId: bigint;
    now: number;
    salts: Array<future_salt>;
}

export class FutureSalts extends TLConstructor<FutureSaltsValues> {
    static override CONSTRUCTOR_ID: number = -1370486635;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "req_msg_id",
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
            "name": "now",
            "type": "int",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "salts",
            "type": "future_salt",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get reqMsgId(): bigint {
        return this.values.reqMsgId
    }

    get now(): number {
        return this.values.now
    }

    get salts(): Array<future_salt> {
        return this.values.salts
    }
}
