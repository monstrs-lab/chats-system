import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SecureCredentialsEncryptedValues {
    data: Buffer;
    hash: Buffer;
    secret: Buffer;
}

export class SecureCredentialsEncrypted extends TLConstructor<SecureCredentialsEncryptedValues> {
    static override CONSTRUCTOR_ID: number = 871426631;
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
            "name": "hash",
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

    get hash(): Buffer {
        return this.values.hash
    }

    get secret(): Buffer {
        return this.values.secret
    }
}
