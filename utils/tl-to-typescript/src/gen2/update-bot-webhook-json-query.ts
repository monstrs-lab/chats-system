import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdateBotWebhookJSONQueryValues {
    queryId: bigint;
    data: any;
    timeout: number;
}

export class UpdateBotWebhookJSONQuery extends TLConstructor<UpdateBotWebhookJSONQueryValues> {
    static override CONSTRUCTOR_ID: number = 2610053286;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
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
          },
          {
            "name": "data",
            "type": "DataJSON",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "timeout",
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

    get queryId(): bigint {
        return this.values.queryId
    }

    get data(): any {
        return this.values.data
    }

    get timeout(): number {
        return this.values.timeout
    }
}
