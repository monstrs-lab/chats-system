import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PongValues {
    msgId: bigint;
    pingId: bigint;
}

export class Pong extends TLConstructor<PongValues> {
    static override CONSTRUCTOR_ID: number = 880243653;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "msg_id",
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
            "name": "ping_id",
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

    get msgId(): bigint {
        return this.values.msgId
    }

    get pingId(): bigint {
        return this.values.pingId
    }
}
