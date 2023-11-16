import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SecurePasswordKdfAlgoSHA512Values {
    salt: Buffer;
}

export class SecurePasswordKdfAlgoSHA512 extends TLConstructor<SecurePasswordKdfAlgoSHA512Values> {
    static override CONSTRUCTOR_ID: number = 2252807570;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "salt",
            "type": "bytes",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get salt(): Buffer {
        return this.values.salt
    }
}
