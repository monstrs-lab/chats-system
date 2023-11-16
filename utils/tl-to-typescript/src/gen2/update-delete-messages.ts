import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdateDeleteMessagesValues {
    messages: Array<number>;
    pts: number;
    ptsCount: number;
}

export class UpdateDeleteMessages extends TLConstructor<UpdateDeleteMessagesValues> {
    static override CONSTRUCTOR_ID: number = 2718806245;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "messages",
            "type": "int",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
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

    get messages(): Array<number> {
        return this.values.messages
    }

    get pts(): number {
        return this.values.pts
    }

    get ptsCount(): number {
        return this.values.ptsCount
    }
}
