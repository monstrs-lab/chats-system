import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PhotoStrippedSizeValues {
    type: string;
    bytes: Buffer;
}

export class PhotoStrippedSize extends TLConstructor<PhotoStrippedSizeValues> {
    static override CONSTRUCTOR_ID: number = 3769678894;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "type",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
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

    get type(): string {
        return this.values.type
    }

    get bytes(): Buffer {
        return this.values.bytes
    }
}
