import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface DestroySessionValues {
    sessionId: bigint;
}

export class DestroySession extends TLMethod<DestroySessionValues> {
    static override CONSTRUCTOR_ID = -414113498;
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
