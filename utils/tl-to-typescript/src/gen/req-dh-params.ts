import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface ReqDHParamsValues {
    nonce: bigint;
    serverNonce: bigint;
    p: Buffer;
    q: Buffer;
    publicKeyFingerprint: bigint;
    encryptedData: Buffer;
}

export class ReqDHParams extends TLMethod<ReqDHParamsValues> {
    static override CONSTRUCTOR_ID = -686627650;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "nonce",
            "type": "int128",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "server_nonce",
            "type": "int128",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "p",
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
            "name": "q",
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
            "name": "public_key_fingerprint",
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
            "name": "encrypted_data",
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

    get nonce(): bigint {
        return this.values.nonce
    }

    get serverNonce(): bigint {
        return this.values.serverNonce
    }

    get p(): Buffer {
        return this.values.p
    }

    get q(): Buffer {
        return this.values.q
    }

    get publicKeyFingerprint(): bigint {
        return this.values.publicKeyFingerprint
    }

    get encryptedData(): Buffer {
        return this.values.encryptedData
    }
}
