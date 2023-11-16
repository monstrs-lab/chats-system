import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SendMessageUploadVideoActionValues {
    progress: number;
}

export class SendMessageUploadVideoAction extends TLConstructor<SendMessageUploadVideoActionValues> {
    static override CONSTRUCTOR_ID: number = 3916839660;
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
