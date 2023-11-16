import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PeerSelfLocatedValues {
    expires: number;
}

export class PeerSelfLocated extends TLConstructor<PeerSelfLocatedValues> {
    static override CONSTRUCTOR_ID: number = 4176226379;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "expires",
            "type": "int",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get expires(): number {
        return this.values.expires
    }
}
