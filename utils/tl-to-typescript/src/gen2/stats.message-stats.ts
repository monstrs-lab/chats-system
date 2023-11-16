import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface StatsMessageStatsValues {
    viewsGraph: any;
}

export class StatsMessageStats extends TLConstructor<StatsMessageStatsValues> {
    static override CONSTRUCTOR_ID: number = 2308567701;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "views_graph",
            "type": "StatsGraph",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get viewsGraph(): any {
        return this.values.viewsGraph
    }
}
