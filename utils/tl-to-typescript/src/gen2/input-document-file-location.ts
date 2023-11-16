import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputDocumentFileLocationValues {
    id: bigint;
    accessHash: bigint;
    fileReference: Buffer;
    thumbSize: string;
}

export class InputDocumentFileLocation extends TLConstructor<InputDocumentFileLocationValues> {
    static override CONSTRUCTOR_ID: number = 3134223748;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "id",
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
            "name": "access_hash",
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
          },
          {
            "name": "thumb_size",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get id(): bigint {
        return this.values.id
    }

    get accessHash(): bigint {
        return this.values.accessHash
    }

    get fileReference(): Buffer {
        return this.values.fileReference
    }

    get thumbSize(): string {
        return this.values.thumbSize
    }
}
