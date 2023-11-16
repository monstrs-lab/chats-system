import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface StatsPercentValueValues {
    part: number;
    total: number;
}

export class StatsPercentValue extends TLConstructor<StatsPercentValueValues> {
    static override CONSTRUCTOR_ID: number = 3419287520;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "part",
            "type": "double",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "total",
            "type": "double",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get part(): number {
        return this.values.part
    }

    get total(): number {
        return this.values.total
    }
}
