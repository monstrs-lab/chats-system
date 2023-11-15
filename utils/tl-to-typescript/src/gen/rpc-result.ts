import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface RpcResultValues {
    reqMsgId: bigint;
    result: any;
}

export class RpcResult extends TLConstructor<RpcResultValues> {
    static override CONSTRUCTOR_ID: number = -212046591;
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
            "name": "result",
            "type": "Object",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get reqMsgId(): bigint {
        return this.values.reqMsgId
    }

    get result(): any {
        return this.values.result
    }
}
