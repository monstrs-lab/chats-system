import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface RpcDropAnswerValues {
    reqMsgId: bigint;
}

export class RpcDropAnswer extends TLMethod<RpcDropAnswerValues> {
    static override CONSTRUCTOR_ID = 1491380032;
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
          }
        ];

    get reqMsgId(): bigint {
        return this.values.reqMsgId
    }
}
