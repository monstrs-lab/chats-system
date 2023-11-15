import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface FutureSaltValues {
    validSince: number;
    validUntil: number;
    salt: bigint;
}

export class FutureSalt extends TLConstructor<FutureSaltValues> {
    static override CONSTRUCTOR_ID: number = 155834844;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "valid_since",
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
            "name": "valid_until",
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
            "name": "salt",
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

    get validSince(): number {
        return this.values.validSince
    }

    get validUntil(): number {
        return this.values.validUntil
    }

    get salt(): bigint {
        return this.values.salt
    }
}
