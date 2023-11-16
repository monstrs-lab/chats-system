import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface DocumentAttributeFilenameValues {
    fileName: string;
}

export class DocumentAttributeFilename extends TLConstructor<DocumentAttributeFilenameValues> {
    static override CONSTRUCTOR_ID: number = 358154344;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "file_name",
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

    get fileName(): string {
        return this.values.fileName
    }
}
