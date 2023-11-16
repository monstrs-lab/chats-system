import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UploadWebFileValues {
    size: number;
    mimeType: string;
    fileType: any;
    mtime: number;
    bytes: Buffer;
}

export class UploadWebFile extends TLConstructor<UploadWebFileValues> {
    static override CONSTRUCTOR_ID: number = 568808380;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "size",
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
            "name": "mime_type",
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
            "name": "file_type",
            "type": "storage.FileType",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "mtime",
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

    get size(): number {
        return this.values.size
    }

    get mimeType(): string {
        return this.values.mimeType
    }

    get fileType(): any {
        return this.values.fileType
    }

    get mtime(): number {
        return this.values.mtime
    }

    get bytes(): Buffer {
        return this.values.bytes
    }
}
