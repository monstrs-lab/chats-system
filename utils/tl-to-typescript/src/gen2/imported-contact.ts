import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ImportedContactValues {
    userId: bigint;
    clientId: bigint;
}

export class ImportedContact extends TLConstructor<ImportedContactValues> {
    static override CONSTRUCTOR_ID: number = 3242081360;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "user_id",
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
            "name": "client_id",
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

    get userId(): bigint {
        return this.values.userId
    }

    get clientId(): bigint {
        return this.values.clientId
    }
}
