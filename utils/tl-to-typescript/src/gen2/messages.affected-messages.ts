import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessagesAffectedMessagesValues {
    pts: number;
    ptsCount: number;
}

export class MessagesAffectedMessages extends TLConstructor<MessagesAffectedMessagesValues> {
    static override CONSTRUCTOR_ID: number = 2228326789;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "pts",
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
            "name": "pts_count",
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

    get pts(): number {
        return this.values.pts
    }

    get ptsCount(): number {
        return this.values.ptsCount
    }
}
