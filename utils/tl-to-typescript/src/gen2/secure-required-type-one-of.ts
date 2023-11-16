import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SecureRequiredTypeOneOfValues {
    types: Array<any>;
}

export class SecureRequiredTypeOneOf extends TLConstructor<SecureRequiredTypeOneOfValues> {
    static override CONSTRUCTOR_ID: number = 41187252;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "types",
            "type": "SecureRequiredType",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get types(): Array<any> {
        return this.values.types
    }
}
