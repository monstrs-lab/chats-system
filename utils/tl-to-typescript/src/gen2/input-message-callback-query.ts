import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputMessageCallbackQueryValues {
    id: number;
    queryId: bigint;
}

export class InputMessageCallbackQuery extends TLConstructor<InputMessageCallbackQueryValues> {
    static override CONSTRUCTOR_ID: number = 2902071934;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "id",
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
            "name": "query_id",
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

    get id(): number {
        return this.values.id
    }

    get queryId(): bigint {
        return this.values.queryId
    }
}
