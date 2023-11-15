import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface ReqPqMultiValues {
    nonce: bigint;
}

export class ReqPqMulti extends TLMethod<ReqPqMultiValues> {
    static override CONSTRUCTOR_ID = -1099002127;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "nonce",
            "type": "int128",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get nonce(): bigint {
        return this.values.nonce
    }
}
