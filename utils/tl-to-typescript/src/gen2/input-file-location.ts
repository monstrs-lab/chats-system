import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputFileLocationValues {
    volumeId: bigint;
    localId: number;
    secret: bigint;
    fileReference: Buffer;
}

export class InputFileLocation extends TLConstructor<InputFileLocationValues> {
    static override CONSTRUCTOR_ID: number = 3755650017;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "volume_id",
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
            "name": "local_id",
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
            "name": "secret",
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
            "name": "file_reference",
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

    get volumeId(): bigint {
        return this.values.volumeId
    }

    get localId(): number {
        return this.values.localId
    }

    get secret(): bigint {
        return this.values.secret
    }

    get fileReference(): Buffer {
        return this.values.fileReference
    }
}
