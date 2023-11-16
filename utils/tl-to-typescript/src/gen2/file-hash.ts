import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface FileHashValues {
    offset: bigint;
    limit: number;
    hash: Buffer;
}

export class FileHash extends TLConstructor<FileHashValues> {
    static override CONSTRUCTOR_ID: number = 4087022428;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "offset",
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
            "name": "limit",
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
            "name": "hash",
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

    get offset(): bigint {
        return this.values.offset
    }

    get limit(): number {
        return this.values.limit
    }

    get hash(): Buffer {
        return this.values.hash
    }
}
