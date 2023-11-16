import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdatesStateValues {
    pts: number;
    qts: number;
    date: number;
    seq: number;
    unreadCount: number;
}

export class UpdatesState extends TLConstructor<UpdatesStateValues> {
    static override CONSTRUCTOR_ID: number = 2775329342;
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
            "name": "qts",
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
            "name": "date",
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
            "name": "seq",
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
            "name": "unread_count",
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

    get qts(): number {
        return this.values.qts
    }

    get date(): number {
        return this.values.date
    }

    get seq(): number {
        return this.values.seq
    }

    get unreadCount(): number {
        return this.values.unreadCount
    }
}
