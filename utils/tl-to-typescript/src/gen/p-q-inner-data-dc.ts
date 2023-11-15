import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PQInnerDataDcValues {
    pq: Buffer;
    p: Buffer;
    q: Buffer;
    nonce: bigint;
    serverNonce: bigint;
    newNonce: bigint;
    dc: number;
}

export class PQInnerDataDc extends TLConstructor<PQInnerDataDcValues> {
    static override CONSTRUCTOR_ID: number = -1443537003;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "pq",
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
            "name": "new_nonce",
            "type": "int256",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "dc",
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

    get pq(): Buffer {
        return this.values.pq
    }

    get p(): Buffer {
        return this.values.p
    }

    get q(): Buffer {
        return this.values.q
    }

    get nonce(): bigint {
        return this.values.nonce
    }

    get serverNonce(): bigint {
        return this.values.serverNonce
    }

    get newNonce(): bigint {
        return this.values.newNonce
    }

    get dc(): number {
        return this.values.dc
    }
}
