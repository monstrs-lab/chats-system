import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SecureDataValues {
    data: Buffer;
    dataHash: Buffer;
    secret: Buffer;
}

export class SecureData extends TLConstructor<SecureDataValues> {
    static override CONSTRUCTOR_ID: number = 2330640067;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "data",
            "type": "bytes",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "data_hash",
            "type": "bytes",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "secret",
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

    get data(): Buffer {
        return this.values.data
    }

    get dataHash(): Buffer {
        return this.values.dataHash
    }

    get secret(): Buffer {
        return this.values.secret
    }
}
