import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface StatsDateRangeDaysValues {
    minDate: number;
    maxDate: number;
}

export class StatsDateRangeDays extends TLConstructor<StatsDateRangeDaysValues> {
    static override CONSTRUCTOR_ID: number = 3057118639;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "min_date",
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
            "name": "max_date",
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

    get minDate(): number {
        return this.values.minDate
    }

    get maxDate(): number {
        return this.values.maxDate
    }
}
