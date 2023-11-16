import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputMediaUploadedPhotoValues {
    flags: any;
    spoiler: boolean;
    file: any;
    stickers: Array<any>;
    ttlSeconds: number;
}

export class InputMediaUploadedPhoto extends TLConstructor<InputMediaUploadedPhotoValues> {
    static override CONSTRUCTOR_ID: number = 505969924;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "flags",
            "type": "#",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": true,
            "useVectorId": false
          },
          {
            "name": "spoiler",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 2,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "file",
            "type": "InputFile",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "stickers",
            "type": "InputDocument",
            "isVector": true,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 0,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "ttl_seconds",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get spoiler(): boolean {
        return this.values.spoiler
    }

    get file(): any {
        return this.values.file
    }

    get stickers(): Array<any> {
        return this.values.stickers
    }

    get ttlSeconds(): number {
        return this.values.ttlSeconds
    }
}
