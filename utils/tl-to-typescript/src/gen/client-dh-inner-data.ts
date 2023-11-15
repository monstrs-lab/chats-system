import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ClientDHInnerDataValues {
    nonce: bigint;
    serverNonce: bigint;
    retryId: bigint;
    gB: Buffer;
}

export class ClientDHInnerData extends TLConstructor<ClientDHInnerDataValues> {
    static override CONSTRUCTOR_ID: number = 1715713620;
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
            "name": "retry_id",
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
            "name": "g_b",
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

    get retryId(): bigint {
        return this.values.retryId
    }

    get gB(): Buffer {
        return this.values.gB
    }
}
