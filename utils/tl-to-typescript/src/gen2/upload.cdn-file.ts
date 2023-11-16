import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UploadCdnFileValues {
    bytes: Buffer;
}

export class UploadCdnFile extends TLConstructor<UploadCdnFileValues> {
    static override CONSTRUCTOR_ID: number = 2845821519;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "bytes",
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

    get bytes(): Buffer {
        return this.values.bytes
    }
}
