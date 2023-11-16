import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AccountUploadWallPaperValues {
    file: any;
    mimeType: string;
    settings: any;
}

export class AccountUploadWallPaper extends TLMethod<AccountUploadWallPaperValues> {
    static override CONSTRUCTOR_ID = 3716494945;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
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
            "name": "settings",
            "type": "WallPaperSettings",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get file(): any {
        return this.values.file
    }

    get mimeType(): string {
        return this.values.mimeType
    }

    get settings(): any {
        return this.values.settings
    }
}
