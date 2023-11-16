import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface StatsGraphErrorValues {
    error: string;
}

export class StatsGraphError extends TLConstructor<StatsGraphErrorValues> {
    static override CONSTRUCTOR_ID: number = 3202127906;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "error",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get error(): string {
        return this.values.error
    }
}
