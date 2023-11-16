import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputPhoneCallValues {
    id: bigint;
    accessHash: bigint;
}

export class InputPhoneCall extends TLConstructor<InputPhoneCallValues> {
    static override CONSTRUCTOR_ID: number = 506920429;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "id",
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
            "name": "access_hash",
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

    get id(): bigint {
        return this.values.id
    }

    get accessHash(): bigint {
        return this.values.accessHash
    }
}
