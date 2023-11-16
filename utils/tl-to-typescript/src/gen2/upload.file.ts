import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UploadFileValues {
    type: any;
    mtime: number;
    bytes: Buffer;
}

export class UploadFile extends TLConstructor<UploadFileValues> {
    static override CONSTRUCTOR_ID: number = 157948117;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "type",
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

    get type(): any {
        return this.values.type
    }

    get mtime(): number {
        return this.values.mtime
    }

    get bytes(): Buffer {
        return this.values.bytes
    }
}
