import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SendMessageUploadDocumentActionValues {
    progress: number;
}

export class SendMessageUploadDocumentAction extends TLConstructor<SendMessageUploadDocumentActionValues> {
    static override CONSTRUCTOR_ID: number = 2852968932;
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
