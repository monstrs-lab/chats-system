import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SecureSecretSettingsValues {
    secureAlgo: any;
    secureSecret: Buffer;
    secureSecretId: bigint;
}

export class SecureSecretSettings extends TLConstructor<SecureSecretSettingsValues> {
    static override CONSTRUCTOR_ID: number = 354925740;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "secure_algo",
            "type": "SecurePasswordKdfAlgo",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "secure_secret",
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
            "name": "secure_secret_id",
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

    get secureAlgo(): any {
        return this.values.secureAlgo
    }

    get secureSecret(): Buffer {
        return this.values.secureSecret
    }

    get secureSecretId(): bigint {
        return this.values.secureSecretId
    }
}
