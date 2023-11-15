import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface DestroySessionNoneValues {
    sessionId: bigint;
}

export class DestroySessionNone extends TLConstructor<DestroySessionNoneValues> {
    static override CONSTRUCTOR_ID: number = 1658015945;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "session_id",
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

    get sessionId(): bigint {
        return this.values.sessionId
    }
}
