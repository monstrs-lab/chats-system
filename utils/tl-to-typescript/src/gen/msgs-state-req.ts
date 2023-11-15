import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MsgsStateReqValues {
    msgIds: Array<bigint>;
}

export class MsgsStateReq extends TLConstructor<MsgsStateReqValues> {
    static override CONSTRUCTOR_ID: number = -630588590;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "msg_ids",
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

    get msgIds(): Array<bigint> {
        return this.values.msgIds
    }
}
