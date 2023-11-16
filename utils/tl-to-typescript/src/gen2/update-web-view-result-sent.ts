import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdateWebViewResultSentValues {
    queryId: bigint;
}

export class UpdateWebViewResultSent extends TLConstructor<UpdateWebViewResultSentValues> {
    static override CONSTRUCTOR_ID: number = 361936797;
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
          }
        ];

    get queryId(): bigint {
        return this.values.queryId
    }
}
