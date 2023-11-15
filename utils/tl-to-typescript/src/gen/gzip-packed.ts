import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface GzipPackedValues {
    packedData: Buffer;
}

export class GzipPacked extends TLConstructor<GzipPackedValues> {
    static override CONSTRUCTOR_ID: number = 812830625;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "packed_data",
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

    get packedData(): Buffer {
        return this.values.packedData
    }
}
