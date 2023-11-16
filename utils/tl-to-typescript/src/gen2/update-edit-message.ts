import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdateEditMessageValues {
    message: any;
    pts: number;
    ptsCount: number;
}

export class UpdateEditMessage extends TLConstructor<UpdateEditMessageValues> {
    static override CONSTRUCTOR_ID: number = 3825430691;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "message",
            "type": "Message",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
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

    get message(): any {
        return this.values.message
    }

    get pts(): number {
        return this.values.pts
    }

    get ptsCount(): number {
        return this.values.ptsCount
    }
}
