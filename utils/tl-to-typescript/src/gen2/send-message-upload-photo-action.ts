import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SendMessageUploadPhotoActionValues {
    progress: number;
}

export class SendMessageUploadPhotoAction extends TLConstructor<SendMessageUploadPhotoActionValues> {
    static override CONSTRUCTOR_ID: number = 3520285222;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "progress",
            "type": "int",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get progress(): number {
        return this.values.progress
    }
}
