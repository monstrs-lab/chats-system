import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MsgsStateInfoValues {
    reqMsgId: bigint;
    info: Buffer;
}

export class MsgsStateInfo extends TLConstructor<MsgsStateInfoValues> {
    static override CONSTRUCTOR_ID: number = 81704317;
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
            "name": "info",
            "type": "bytes",
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

    get info(): Buffer {
        return this.values.info
    }
}
