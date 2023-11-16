import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PopularContactValues {
    clientId: bigint;
    importers: number;
}

export class PopularContact extends TLConstructor<PopularContactValues> {
    static override CONSTRUCTOR_ID: number = 1558266229;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "client_id",
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
            "name": "importers",
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

    get clientId(): bigint {
        return this.values.clientId
    }

    get importers(): number {
        return this.values.importers
    }
}
